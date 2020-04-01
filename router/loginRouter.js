const express = require('express')
const router = express.Router()
const jsonWebToken = require("jsonwebtoken")
const token = require("../middlewear/token")
const {secret} = require('../config/config.js')
const {loginAdd,loginDel,loginFind,loginUpdata,loginFindOne,loginup} = require('../contrls/loginContrl')

/**
 * @api {post} /login/add 添加管理员
 * @apiName add
 * @apiGroup login
 *
 * @apiParam {String} userName 管理员账号
 * @apiParam {String} passWord 管理员密码
 * @apiParam {String} leavel 管理员等级
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} msg  提示信息
 */
//添加管理员信息
router.post('/add',(req,res) =>{
    let {userName,passWord,leavel} = req.body
    loginAdd({userName,passWord,leavel})
    .then(()=>{
        res.send({code: 0, msg: '添加成功'})
    }).catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})

/**
 * @api {post} /login/get 查询管理员
 * @apiName get
 * @apiGroup login
 *
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} list  查询到的管理员列表
 */
// 查询所有管理员信息
router.post('/get', token,(req, res) => {
    loginFind()
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
        // console.log(err)
    })
})

/**
 * @api {post} /login/getone 管理员登录
 * @apiName getone
 * @apiGroup login
 *
 * @apiParam {String} userName 管理员账号
 * @apiParam {String} passWord 管理员密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} token  token信息
 */
    // 查询单个管理员信息 登录
router.post('/getone',token, (req, res) => {
    let {userName,passWord} = req.body
    loginFindOne({userName,passWord})
    .then(() => {
        let token = jsonWebToken.sign({userName,passWord},secret)
        // console.log(token)
        let userInfo= jsonWebToken.verify(token,secret)
        // console.log(userInfo)
        res.send({code: 0, msg: '登录成功',token})
    })
    .catch((err) => {
        res.send({code: -1, msg: '登录失败', err})
    })
})

/**
 * @api {post} /login/getup 管理员登录
 * @apiName getup
 * @apiGroup login
 *
 * @apiParam {String} _id 管理员的id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} list  查询的管理员信息
 */
router.post('/getup',token, (req, res) => {
    let {_id} = req.body
    loginup(_id)
    .then((result) => {
        res.send({code: 0, msg: '查询成功',list:result})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /login/del 删除管理员
 * @apiName del
 * @apiGroup login
 *
 * @apiParam {String} _id 管理员的id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
    // 删除管理员信息
router.post('/del', token,(req, res) => {
    let {_id} = req.body
    loginDel(_id)
    .then(() => {
    res.send({code: 0, msg: '删除成功'})
    })
    .catch((err) => {
    res.send({code: -1, msg: '删除失败', err})
    })
})

/**
 * @api {post} /login/updata 修改管理员
 * @apiName updata
 * @apiGroup login
 *
 * @apiParam {String} _id 管理员的id
 * @apiParam {String} userName 管理员的账号
 * @apiParam {String} passWord 管理员的密码
 * @apiParam {String} leavel 管理员的等级
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
    //修改用户信息
router.post('/updata',token,(req,res) => {
    let {_id}= req.body
    let{userName,passWord,leavel} = req.body
    // console.log(req)
    // console.log({userName,passWord,leavel})
    if(leavel==undefined){
        leavel='admin'
    }
    loginUpdata(_id,{userName,passWord,leavel})
    .then((result) => {
        // console.log(result)
        res.send({code: 0, msg: '修改成功'})
    })
    .catch((err) => {
        res.send({code: -1, msg: '修改失败', err})
        // console.log(err)
    })
})
module.exports = router
