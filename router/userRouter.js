const express = require('express')
const router = express.Router()
const token = require("../middlewear/token")
const path = require('path')
const fs = require('fs')
const {userAdd,userDel,userFind,userUpdata,userPage,userFindOne} = require('../contrls/userContrl')


/**
 * @api {post} /user/add 添加用户
 * @apiName add
 * @apiGroup user
 *
 * @apiParam {String} userName 用户账号
 * @apiParam {String} phoneNumber 用户电话
 * @apiParam {String} avatar 用户头像地址
 * @apiParam {String} order 用户订单数量
 * @apiParam {String} passWord 用户密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
//添加用户信息
router.post('/add',token,(req,res) =>{
    let {userName,phoneNumber,avatar,order,passWord} = req.body
    userAdd({userName,phoneNumber,avatar,order,passWord})
    .then(()=>{
        res.send({code: 0, msg: '添加成功'})
    }).catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})

/**
 * @api {post} /user/get 添加用户
 * @apiName get
 * @apiGroup user
 *
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} list  查询用户列表
 */
// 查询所有用户信息
router.post('/get', token,(req, res) => {
    userFind()
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})

/**
 * @api {post} /user/getone 按id查询用户
 * @apiName getone
 * @apiGroup user
 *
 * @apiParam {String} _id 用户id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} list  查询用户列表
 * @apiSuccess {String} err  错误原因
 */
//查询单独用户
router.post('/getone',token, (req, res) => {
    let {_id} = req.body
    userFind(_id)
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /user/del 删除用户
 * @apiName del
 * @apiGroup user
 *
 * @apiParam {String} _id 用户id
 * @apiParam {String} avator 用户头像地址
 * 
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
// 删除用户信息
router.post('/del',token, (req, res) => {
    let {_id} = req.body
    fs.unlinkSync(path.join(__dirname, `..${_id.avatar}`))
    userDel(_id._id)
    .then(() => {
    res.send({code: 0, msg: '删除成功'})
    })
    .catch((err) => {
    res.send({code: -1, msg: '删除失败', err})
    })
})

/**
 * @api {post} /user/page 分页查询
 * @apiName page
 * @apiGroup user
 *
 * @apiParam {String} page 页码
 * @apiParam {String} pageSize 页面显示数量
 * 
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} list  查询用户列表
 * 
 */
    // 分页查询用户
router.post('/page',token, (req, res) => {
    let { page, pageSize } = req.body
    userPage(Number(page), Number(pageSize))
    .then(({list, count}) => {
        res.send({code: 0, msg: '查询成功', list, count})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
    })

    
/**
 * @api {post} /user/updata 修改用户
 * @apiName updata
 * @apiGroup user
 * 
 * @apiParam {String} _id 用户id
 * @apiParam {String} userName 用户账号
 * @apiParam {String} phoneNumber 用户电话
 * @apiParam {String} avatar 用户头像地址
 * @apiParam {String} order 用户订单数量
 * @apiParam {String} passWord 用户密码
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
//修改用户信息
router.post('/updata',token,(req,res) => {
    let {_id} = req.body
    let {userName,passWord,order,avatar,phoneNumber} = req.body
    // console.log({userName,passWord,order,avatar,phoneNumber})
    userUpdata(_id,{userName,passWord,order,avatar,phoneNumber})
    .then(() => {
        res.send({code: 0, msg: '修改成功'})
    })
    .catch((err) => {
        throw err
        res.send({code: -1, msg: '修改失败', err})
    })
})
module.exports = router
