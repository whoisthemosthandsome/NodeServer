const express = require('express')
const router = express.Router()
const {bookAdd,bookDel,bookFind,bookFindUser,bookFindPho} = require('../contrls/bookContrl')

router.post('/add',(req,res)=>{
    let {name,phoName,date} = req.body
    bookAdd({name,phoName,date})
    .then(()=>{
        res.send({code:0,msg:'添加成功'})
    }).catch(()=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
router.post('/get',(req,res)=>{
    bookFind()
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/getuser',(req,res)=>{
    let {name} = req.body
    bookFind(name)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/getpho',(req,res)=>{
    let {name} = req.body
    bookFindUser(name)
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/del',(req,res)=>{
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
