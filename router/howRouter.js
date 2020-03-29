const express = require('express')
const router = express.Router()
const { howAdd,howList,howDel,allList,ByPage} = require ('../contrls/howControl.js')

//用户添加自己的评论
router.post('/add',(req,res)=>{
  console.log('body',req.body)
  let {userName,content,url,star,staffName}=req.body
//  console.log('后端控制台8行',url)
  howAdd({userName,content,url,star,staffName})
  .then(()=>{
    res.send({code:0,msg:'添加评论成功',url})
  })
  .catch((err)=>{
    res.send({code: -1, msg: '添加失败',err:err})
  })
})
//用户删除自己发布的评论
router.post('/delete',(req,res)=>{
  let {_id}=req.body
  howDel(_id)
  .then(()=>{
    res.send({code:0,msg:'删除评论成功'})
  })
  .catch((err)=>{
    console.log(err)
    res.send({code: -1, msg: '删除失败',err:err})
  })
})
//用户查看自己发布的所有评论
router.post('/list',(req,res)=>{
  let {userName}=req.body
  howList(userName)
  .then((data)=>{
    res.send({code:0,msg:'查看评论成功',data})
  })
  .catch((err)=>{
    res.send({code: -1, msg: '添加失败',err:err})
  })
})
//管理员查看所有评论
router.post('/all',(req,res)=>{
  allList()
  .then((data)=>{
    res.send({code:0,msg:'查看评论成功',data})
  })
  .catch((err)=>{
    res.send({code: -1, msg: '添加失败',err:err})
  })
})
//管理员页面分页查询
router.post('/pages',(req,res)=>{
  let page = req.body.page||1 //查询的第几页数据
  let pageSize = req.body.pageSize ||2 //每页几条数据
  ByPage(page,pageSize)
  .then((data)=>{
     let {result,allCount}=data 
    res.send({err:0,msg:'查询成功',list:result,allCount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
module.exports = router
