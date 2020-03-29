const express = require('express')
const router = express.Router()
const {bookAdd,bookDel,bookFind} = require('../contrls/bookContrl')

router.post('/add',(req,res)=>{
    let {userName,phoName,date} = req.body
    bookAdd({userName,phoName,date})
    .then(()=>{
        res.send({code:0,msg:'添加成功'})
    }).catch(()=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
router.post('/get',(req,res)=>{
    let {userName} = req.body
    bookFind({userName})
    .then((res)=>{
        let {list} = res
        res.send({code:0,msg:'查询成功',list})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/del',(req,res)=>{
    bookDel(_id)
    .then(()=>{
        res.send({code: 0, msg: '删除成功'})
    })
    .catch((err)=>{
        res.send({code: -1, msg: '删除失败', err})
    })
})
module.exports = router
