const express = require('express')
const router = express.Router()
const { howAdd,howList,howDel,allList,ByPage,getScore,byKw} = require ('../contrls/howControl.js')

//用户添加自己的评论
router.post('/add',(req,res)=>{
  let {userName,content,url,star,staffName}=req.body
  let createTime=(new Date()).getTime()
//  console.log('后端控制台8行',url)
  howAdd({userName,content,url,star,staffName,createTime})
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
//通过工作人员姓名查找平均分
router.post('/score',(req,res)=>{
  let staffName = req.body.phpName
  getScore(staffName)
  .then((data)=>{
    res.send({err:0,msg:'查询平均分成功',score:data})
  })
})
//通过搜索关键字得到摄影师对应信息
router.post('/byKw',(req,res)=>{
  let kw = req.body.kw ||''
  let page = req.body.page||1
  let pageSize = req.body.pageSize||3
  byKw(kw,page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询成功',list:data.result,allCount:data.allCount})
  })
  .catch((err)=>{res.send({err:-1,msg:'查询失败请重试',err:err})})
})


module.exports = router
