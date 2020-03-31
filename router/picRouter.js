const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const { picAdd, picGet, picDel, picGetByPage, picGetById, picUpdate, picGetByPhpId, picGetByKw, picLike, picLook } = require('../contrls/picContrl')

/**
 * @api {post} /pic/add 添加客样照
 * @apiName add 
 * @apiGroup pic
 *
 * @apiParam {String} title 标题
 * @apiParam {String} desc 描述
 * @apiParam {String} photer 摄影师_id
 * @apiParam {Array} imgs 图片路径
 * @apiParam {String} phpType 摄影类型
 * @apiParam {String} states 发布状态
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} stack  错误信息
 */
// 添加客样照
router.post('/add', (req, res) => {
  let { title, desc, photer, imgs, phpType, states } = req.body
  let createTime = (new Date()).getTime()
  picAdd({ title, desc, photer, imgs, look: 0, like: 0, createTime, phpType, states })
   .then(() => {
     res.send({code: 0, msg: '添加成功'})
   })
   .catch((stack) => {
     res.send({code: -1, msg: '添加失败', stack})
   })
})

/**
 * @api {post} /pic/get 查询所有客样照
 * @apiName get
 * @apiGroup pic
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {Array} list  客样照数据
 * @apiSuccess {String} stack  错误信息
 */
// 查询所有客样照
router.post('/get', (req, res) => {
  picGet()
  .then((list) => {
    res.send({code: 0, msg: '查询成功', list})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

/**
 * @api {post} /pic/getByPage 分页查询客样照
 * @apiName getByPage 
 * @apiGroup pic
 *
 * @apiParam {Number} page 查询页
 * @apiParam {Number} pageSize 每页显示条数
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {Array} list  客样照数据
 * @apiSuccess {Number} count 总条数
 * @apiSuccess {String} stack  错误信息
 */
// 分页查询客样照
router.post('/getByPage', (req, res) => {
  let { page, pageSize } = req.body
  picGetByPage(Number(page), Number(pageSize))
  .then(({list, count}) => {
    res.send({code: 0, msg: '查询成功', list, count})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

/**
 * @api {post} /pic/getById 客样照id查询客样照
 * @apiName getById
 * @apiGroup pic
 *
 * @apiParam {String} _id  客样照id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {Object} list  客样照数据
 * @apiSuccess {String} stack  错误信息
 */
//  通过客样照id查询
router.post('/getById', (req, res) => {
  let {_id} = req.body
  picGetById(_id)
  .then((list) => {
    res.send({code: 0, msg: '查询成功', list})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

/**
 * @api {post} /pic/getByPhpId 摄影师id查询客样照
 * @apiName getByPhpId
 * @apiGroup pic
 *
 * @apiParam {String} _id  摄影师id
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {Array} list  客样照数据
 * @apiSuccess {Number} count 总条数
 * @apiSuccess {String} stack  错误信息
 */
//  通过摄影师id查询
router.post('/getByPhpId', (req, res) => {
  let {photer} = req.body
  picGetByPhpId(photer)
  .then(({list, count}) => {
    res.send({code: 0, msg: '查询成功', list, count})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

/**
 * @api {post} /pic/getByKwd 关键词查询客样照
 * @apiName getByKw
 * @apiGroup pic
 *
 * @apiParam {String} kw  关键词
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {Array} list  客样照数据
 * @apiSuccess {Number} count 总条数
 * @apiSuccess {String} stack  错误信息
 */
//  通过关键词查询客样照
router.post('/getByKw', (req, res) => {
  let {kw} = req.body
  picGetByKw(kw)
  .then(({list, count}) => {
    res.send({code: 0, msg: '查询成功', list, count})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

/**
 * @api {post} /pic/update 修改客样照
 * @apiName update 
 * @apiGroup pic
 *
 * @apiParam {String} _id 客样照_id
 * @apiParam {String} title 标题
 * @apiParam {String} desc 描述
 * @apiParam {String} photer 摄影师_id
 * @apiParam {String} phpType 摄影类型
 * @apiParam {Array} imgs 图片路径
 * @apiParam {String} look 浏览
 * @apiParam {String} like 点赞
 * @apiParam {String} states 发布状态
 * @apiParam {Boolean} imgsChange 是否修改了图片
 * @apiParam {Array} imgsBeforeUpdate 修改前图片路径
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} stack  错误信息
 */
// 修改客样照
router.post('/update', (req, res) => {
  let { _id, title, desc, photer, phpType, imgs, look, like, states, imgsChange, imgsBeforeUpdate } = req.body
  if (imgsChange) { // 删除public中修改前的图片
     imgsBeforeUpdate.map((item) => {
      fs.readFile(path.join(__dirname, `..${item}`), (err) => {
        if(!err){
          fs.unlinkSync(path.join(__dirname, `..${item}`))
        }
      })
    })
  }
 
  let createTime = (new Date()).getTime() // 当前时间
  picUpdate(_id, { title, desc, photer, phpType, imgs, look, like, createTime, states })
   .then(() => {
     res.send({code: 0, msg: '修改成功'})
   })
   .catch((stack) => {
     res.send({code: -1, msg: '修改失败', stack})
   })
})

/**
 * @api {post} /pic/del 删除客样照
 * @apiName del
 * @apiGroup pic
 *
 * @apiParam {String} _id  客样照id
 * @apiParam {Array} imgs 图片路径
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} stack  错误信息
 */
// 删除客样照
router.post('/del', (req, res) => {
  let { _id, imgs } = req.body
  // 删除public中的图片
  imgs.map((item) => {
   fs.readFile(path.join(__dirname, `..${item}`), (err) => {
    if(!err){
      fs.unlinkSync(path.join(__dirname, `..${item}`))
    }
   })
  })
  // 删除数据库中客样照
  picDel(_id)
  .then(() => {
    res.send({code: 0, msg: '删除成功'})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '删除失败', stack})
  })
})

/**
 * @api {post} /pic/like 点赞
 * @apiName like
 * @apiGroup pic
 *
 * @apiParam {String} _id  客样照id
 * @apiParam {String} like 点赞数量
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} stack  错误信息
 */
// 点赞
router.post('/like', (req, res) => {
  let { _id, like } = req.body
  picLike(_id, like)
  .then(() => {
    res.send({code: 0, msg: '点赞成功'})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '点赞失败', stack})
  })
})

/**
 * @api {post} /pic/look 浏览
 * @apiName look
 * @apiGroup pic
 *
 * @apiParam {String} _id  客样照id
 * @apiParam {String} look 浏览数量
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {String} msg  提示信息
 * @apiSuccess {String} stack  错误信息
 */
// 浏览
router.post('/look', (req, res) => {
  let { _id, look } = req.body
  picLook(_id, look)
  .then(() => {
    res.send({code: 0, msg: '浏览成功'})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '浏览失败', stack})
  })
})

module.exports = router
