const express = require('express')
const router = express.Router()
const token = require("../middlewear/token")
const {bookAdd,bookDel,bookFind,bookFindUser,bookFindPho} = require('../contrls/bookContrl')



/**
 * @api {post} /book/add 添加预约
 * @apiName add
 * @apiGroup book
 *
 * @apiParam {String} name 用户的id
 * @apiParam {String} phoName 摄影师的id
 * @apiParam {String} date 日期
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} msg  提示信息
 */
router.post('/add',token,(req,res)=>{
    let {name,phoName,date} = req.body
    bookAdd({name,phoName,date})
    .then(()=>{
        res.send({code:0,msg:'添加成功'})
    }).catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
/**
 * @api {post} /book/get 查询预约
 * @apiName get
 * @apiGroup book
 *
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} list  返回预约列表
 * @apiSuccess {String} err  错误原因
 * 
 */
router.post('/get',token,(req,res)=>{
    bookFind()
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /book/getuser 按照用户查询预约
 * @apiName getuser
 * @apiGroup book
 *
 * @apiParam {String} name 用户的id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} list  返回预约列表
 * @apiSuccess {String} err  错误原因
 * 
 */
router.post('/getuser',token,(req,res)=>{
    let {name} = req.body
    bookFind(name)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /book/getpho 按照摄影师查询预约
 * @apiName getpho
 * @apiGroup book
 *
 * @apiParam {String} name 摄影师的id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} list  返回预约列表
 * @apiSuccess {String} err  错误原因
 * 
 */
router.post('/getpho',token,(req,res)=>{
    let {name} = req.body
    bookFindUser(name)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /book/del 删除预约
 * @apiName del
 * @apiGroup book
 *
 * @apiParam {String} _id 需要删除预约的的id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * 
 */
router.post('/del',token,(req,res)=>{
    let {_id} = req.body
    bookDel(_id)
    .then(()=>{
        res.send({code: 0, msg: '删除成功'})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '删除失败', err})
    })
})
module.exports = router
