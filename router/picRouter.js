const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const XLSX = require('xlsx')
const { picAdd, picGet, picDel, picGetByPage, picGetById, picUpdate, picGetByPhpId, picGetByKw } = require('../contrls/picContrl')

// 添加客样照
router.post('/add', (req, res) => {
  let { title, desc, photer, imgs, phpType } = req.body
  let createTime = (new Date()).getTime()
  picAdd({ title, desc, photer, imgs, look: 0, like: 0, createTime, phpType })
   .then(() => {
     res.send({code: 0, msg: '添加成功'})
   })
   .catch((stack) => {
     res.send({code: -1, msg: '添加失败', stack})
   })
})

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

// 修改客样照
router.post('/update', (req, res) => {
  let { _id, title, desc, photer, phpType, imgs, look, like, imgsChange, imgsBeforeUpdate } = req.body
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
  picUpdate(_id, { title, desc, photer, phpType, imgs, look, like, createTime })
   .then(() => {
     res.send({code: 0, msg: '修改成功'})
   })
   .catch((stack) => {
     res.send({code: -1, msg: '修改失败', stack})
   })
})

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

module.exports = router
