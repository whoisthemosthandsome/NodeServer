const express = require('express')
const router = express.Router()
const {userAdd,userDel,userFind,userUpdata,userPage,userFindOne} = require('../contrls/userContrl')

//添加用户信息
router.post('/add',(req,res) =>{
    let {userName,phoneNumber,avatar,order,passWord} = req.body
    userAdd({userName,phoneNumber,avatar,order,passWord})
    .then(()=>{
        res.send({code: 0, msg: '添加成功'})
    }).catch((err)=>{
        res.send({code: -1, msg: '添加失败',err})
    })
})
// 查询所有用户信息
router.post('/get', (req, res) => {
    userFind()
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})
//查询单独用户
router.post('/getone', (req, res) => {
    let {_id} = req.body
    userFind(_id)
    .then((list) => {
        res.send({code: 0, msg: '查询成功', list})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
})
// 删除用户信息
router.post('/del', (req, res) => {
    let {_id} = req.body
    userDel(_id)
    .then(() => {
    res.send({code: 0, msg: '删除成功'})
    })
    .catch((err) => {
    res.send({code: -1, msg: '删除失败', err})
    })
})
    // 分页查询用户
router.post('/page', (req, res) => {
    let { page, pageSize } = req.body
    userPage(Number(page), Number(pageSize))
    .then(({list, count}) => {
        res.send({code: 0, msg: '查询成功', list, count})
    })
    .catch((err) => {
        res.send({code: -1, msg: '查询失败', err})
    })
    })
//修改用户信息
router.post('/updata',(req,res) => {
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
