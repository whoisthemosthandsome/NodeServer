const express = require('express')
const router = express.Router()
const { howAdd,howList,howDel,allList,ByPage,getScore,byKw} = require ('../contrls/howControl.js')

/**
 * @api {post} /how/add 用户添加自己的评论 
 * @apiName 用户添加自己的评论
 * @apiGroup how
 *
 * @apiParam {String} userName 用户名
 * @apiParam {String} content 评论内容
 * @apiParam {String} url 图片路径
 * @apiParam {String} star 评分（1-5） 
 * @apiParam {String} staffName 摄影师名
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} url  图片路径
 * @apiSuccess {String} err  错误信息
 */
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

/**
 * @api {post} /how/delete 用户删除自己发布的评论 
 * @apiName 用户删除自己发布的评论
 * @apiGroup how
 *
 * @apiParam {String} _id 删除评论对应的id
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 */
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

/**
 * @api {post} /how/list 用户查看自己发布的所有评论 
 * @apiName 用户查看自己发布的所有评论
 * @apiGroup how
 *
 * @apiParam {String} userName 用户名
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 * @apiSuccess {String} data  用户自己所有的评论信息
 */
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

/**
 * @api {post} /how/all 管理员查看所有评论 
 * @apiName 管理员查看所有评论
 * @apiGroup how
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 * @apiSuccess {String} data  所有用户的评论信息
 */
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

/**
 * @api {post} /how/pages 管理员页面分页查询
 * @apiName 管理员页面分页查询
 * @apiGroup how
 * 
 * @apiParam {String} page  查询第几页数据
 * @apiParam {String} pageSize  每页几条数据
 * 
 * @apiSuccess {Array} list 用户自己所有的评论信息
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {Number} allCount  总页数
 * 
 */
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
/**
 * @api {post} /how/score 通过工作人员姓名查找平均分（前端传phpName）
 * @apiName 通过工作人员姓名查找平均分
 * @apiGroup how
 * 
 * @apiParam {String} staffName  员工名字
 * @apiParam {String} pageSize  每页几条数据
 * 
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 * @apiSuccess {String} data  对应摄影师满意度
 */
//通过工作人员姓名查找平均分
router.post('/score',(req,res)=>{
  let staffName = req.body.phpName
  getScore(staffName)
  .then((data)=>{
    res.send({err:0,msg:'查询平均分成功',score:data})
  })
})
/**
 * @api {post} /how/byKw 通过搜索关键字得到摄影师对应信息
 * @apiName 通过搜索关键字得到摄影师对应信息
 * @apiGroup how
 * 
 * @apiParam {String} page  查询第几页数据
 * @apiParam {String} pageSize  每页几条数据
 * @apiParam {String} kw  关键字
 * 
 * @apiSuccess {Array} list 用户自己所有的评论信息
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} err  错误信息
 * @apiSuccess {Number} code  状态码
 * @apiSuccess {Number} allCount  总页数
 */
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
