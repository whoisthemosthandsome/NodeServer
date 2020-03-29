const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const { picAdd, picGet, picDel, picGetByPage } = require('../contrls/picContrl')

// 添加客样照
router.post('/add', (req, res) => {
  let { title, desc, photer, imgs } = req.body
  picAdd({ title, desc, photer, imgs, look: 0, like: 0 })
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

// 删除客样照
router.post('/del', (req, res) => {
  let { _id, imgs } = req.body
  // 删除public中的图片
  imgs.map((item) => {
    fs.unlinkSync(path.join(__dirname, `..${item}`))
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
