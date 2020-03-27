const express = require('express')
const router = express.Router()
const { bannerAdd, bannerGet, del } = require('../contrls/bannerContrl')
const multer = require('multer')
const upload = multer({})
const path = require('path')
const fs = require('fs')

// 添加轮播图
router.post('/add', upload.single('banner'), (req, res) => {
  let { mimetype, buffer } = req.file
  let url = ''
  // 获取图片格式
  const ext = mimetype.split('/')[1]
  // 图片名称
  const imgName = (new Date()).getTime() + '_banner' + '_' + parseInt(Math.random()*10000)
  // 上传图片
  let result = fs.writeFileSync(path.join(__dirname, `../public/${imgName}.${ext}`), buffer,)
  if (!result) { url = `/public/${imgName}.${ext}` }
  // 数据库添加
  bannerAdd({ url })
  .then(() => {
    res.send({code: 0, msg: '上传成功', url})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '上传失败', stack})
  })
})

// 获取轮播图
router.post('/get', (req, res) => {
  bannerGet()
  .then((list) => {
    res.send({code: 0, msg: '查询成功', list})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '查询失败', stack})
  })
})

// 删除轮播图
router.post('/del', (req, res) => {
  let { _id, url } = req.body
  // 删除public中的图片
  fs.unlinkSync(path.join(__dirname, `..${url}`))
  // 删除数据库图片
  del(_id)
  .then(() => {
    res.send({code: 0, msg: '删除成功'})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '删除失败', stack})
  })
})
module.exports = router
