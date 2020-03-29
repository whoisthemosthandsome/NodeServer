const express = require('express')
const router = express.Router()
const {orderAdd,orderDel,orderFind,orderFindOne} = require('../contrls/orderContrl')

router.post('/add',(req,res)=>{
    let {userName,phoid,date,picid} = req.body
    orderAdd({userName,phoid,date,picid})
    .then(()=>{
        res.send({code:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
router.post('/del',(req,res)=>{
    let {_id} = req.body
    orderDel(_id)
    .then(()=>{
        res.send({code: 0, msg: '删除成功'})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '删除失败', err})
    })
})
router.post('/get',(req,res)=>{
    orderFind()
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/getone',(req,res)=>{
    let {userName} = req.body
    orderFindOne(userName)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
module.exports = router