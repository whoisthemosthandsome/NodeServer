const express = require('express')
const router = express.Router()
const { picAdd } = require('../contrls/picContrl')
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
module.exports = router