const express = require('express')
const router = express.Router()
const {loginAdd,loginrDel,loginFind,loginUpdata,loginFindOne} = require('../contrls/loginContrl')

//添加管理员信息
router.post('/add',(req,res) =>{
    let {userName,passWord} = req.body
    loginAdd({userName,passWord})
    .then(()=>{
        res.send({code: 0, msg: '添加成功'})
    }).catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
// 查询所有管理员信息
router.post('/get', (req, res) => {
    loginFind()
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
        console.log(err)
    })
})
    // 查询单个管理员信息
router.post('/getone', (req, res) => {
    let {userName,passWord} = req.body
    loginFindOne({userName,passWord})
    .then(() => {
        res.send({code: 0, msg: '查询成功'})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})
    // 删除管理员信息
router.post('/del', (req, res) => {
    let {_id} = req.body
    loginDel(_id)
    .then(() => {
    res.send({code: 0, msg: '删除成功'})
    })
    .catch((err) => {
    res.send({code: -1, msg: '删除失败', err})
    })
})
    //修改用户信息
router.post('/updata',(req,res) => {
    loginUpdata(_id,{obj})
    .then(() => {
        res.send({code: 0, msg: '修改成功'})
    })
    .catch((err) => {
        res.send({code: -1, msg: '修改失败', err})
    })
})
module.exports = router
