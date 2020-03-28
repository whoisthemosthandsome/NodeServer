const express = require('express')
const router = express.Router()
const { picAdd, picGet } = require('../contrls/picContrl')

// 添加客样照
router.post('/add', (req, res) => {
  let { title, desc, photer, imgs } = req.body
  // 数据库添加
  picAdd({ title, desc, photer, imgs, look: 0, collect: 0 })
   .then(() => {
     res.send({code: 0, msg: '添加成功'})
   })
   .catch((stack) => {
     res.send({code: -1, msg: '添加失败', stack})
   })
})

// 查询客样照
router.post('/get', (req, res) => {
  picGet()
  .then((list) => {
    res.send({code: 0, msg: '查询成功', list})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})
module.exports = router