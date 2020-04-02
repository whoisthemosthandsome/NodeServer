const express = require('express')
const token = require("../middlewear/token")
const router = express.Router()
const {orderAdd,orderDel,orderFind,orderFindOne} = require('../contrls/orderContrl')


/**
 * @api {post} /order/add 添加订单
 * @apiName add
 * @apiGroup order
 *
 * @apiParam {String} userName 用户的id
 * @apiParam {String} phoid 摄影师id
 * @apiParam {String} picid 照片的id
 * @apiParam {String} date 日期
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
router.post('/add',token,(req,res)=>{
    let {userName,phoid,date,picid} = req.body
    orderAdd({userName,phoid,date,picid})
    .then(()=>{
        res.send({code:0,msg:'添加成功'})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})

/**
 * @api {post} /order/del 删除订单
 * @apiName del
 * @apiGroup order
 *
 * @apiParam {String} _id 订单id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 */
router.post('/del',token,(req,res)=>{
    let {_id} = req.body
    orderDel(_id)
    .then(()=>{
        res.send({code: 0, msg: '删除成功'})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '删除失败', err})
    })
})

/**
 * @api {post} /order/get 查询订单
 * @apiName get
 * @apiGroup order
 *
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} list  订单查询列表
 */
router.post('/get',token,(req,res)=>{
    orderFind()
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
/**
 * @api {post} /order/getone 按照用户查询订单
 * @apiName getone
 * @apiGroup order
 *
 * @apiParam {String} userName 用户id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误原因
 * @apiSuccess {String} list  订单查询列表
 * 
 */

router.post('/getone',token,(req,res)=>{
    let {userName} = req.body
    orderFindOne(userName)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
module.exports = router