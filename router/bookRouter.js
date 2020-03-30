const express = require('express')
const router = express.Router()
const {bookAdd,bookDel,bookFind,bookFindUser,bookFindPho} = require('../contrls/bookContrl')

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
    bookFind()
    .then((result)=>{
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        // console.log(2)
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/getuser',(req,res)=>{
    let {userName} = req.body
<<<<<<< HEAD
    bookFind(userName)
    .then((res)=>{
        let {list} = res
        res.send({code:0,msg:'查询成功',list})
    // console.log({userName})
=======
>>>>>>> 1e7643eede581b7723e1637a5bb2c0425f9800a2
    bookFindUser(userName)
    .then((result)=>{
        // let {list} = result
        // console.log(res)
        // console.log(1)
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        // console.log(2)
        res.send({code: -1, msg: '查询失败', err})
    })
})
router.post('/getpho',(req,res)=>{
    let {bookFindPho} = req.body
    // console.log({userName})
    bookFindUser(bookFindPho)
    .then((result)=>{
        // let {list} = result
        // console.log(res)
        // console.log(1)
        res.send({code:0,msg:'查询成功',list:result})
    }).catch((err)=>{
        // console.log(2)
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
