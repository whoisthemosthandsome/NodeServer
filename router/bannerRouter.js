const express = require('express')
const router = express.Router()
const { bannerAdd } = require('../contrls/bannerContrl')
const multer = require('multer')
const upload = multer({})
const path = require('path')
const fs = require('fs')

router.post('/add', upload.single('banner'), (req, res) => {
  let { mimetype, buffer } = req.file
  let url = ''
  // 获取图片格式
  const ext = mimetype.split('/')[1]
  // 图片名称
  const imgName = (new Date()).getTime() + '_banner' + '_' + parseInt(Math.random()*9999)
  // 上传图片
  let result = fs.writeFileSync(path.join(__dirname, `../public/${imgName}.${ext}`), buffer,)
  if (!result) { url = `/public/${imgName}.${ext}` }
  // 数据库添加
  bannerAdd({ url })
  .then(() => {
    res.send({code: 0, msg: '上传成功', url})
  })
  .catch((err) => {
    console.log(err)
    res.send({code: -1, msg: '上传失败'})
  })
})

module.exports = router
