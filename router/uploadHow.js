const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const upload = multer({})

router.post('/upload', upload.array('pic'), (req, res) => {
  let imgs = []
  for (let index = 0; index < req.files.length; index++) {
    let { mimetype, buffer } = req.files[index]
    // 图片格式
    let ext = mimetype.split('/')[1]
    // 图片名称
    let imgName = (new Date()).getTime() + '_how_' + parseInt(Math.random()*10000)
    // 保存图片到public
    let result = fs.writeFileSync(path.join(__dirname, `../public/${imgName}.${ext}`), buffer)
    if (!result) {
      imgs.push(`/public/${imgName}.${ext}`)
    }
  }
  res.send({ code: 0, msg: '上传成功', imgs })
})

module.exports = router