const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const multer = require('multer')
const upload = multer({})

// 多字段名上传图片
// 在此处加上要上传图片的字段
//fields可以接受多个参数，多个key值的东西
let multipleFields = upload.fields([
  {name:'pic'},
  {name:'how'},
  {name:'user'}
])

router.post('/upload', (req, res) => {
  multipleFields(req,res,(err) => {
    if(err){return res.send({ code: 0, msg: '上传失败', stack: err})}
    let imgs = []
    for (const key in req.files) {
      req.files[key].map((item)=>{
        let { mimetype, buffer } = item
        // 图片格式
        let ext = mimetype.split('/')[1]
        // 图片名称
        let imgName = (new Date()).getTime() + `_${key}_` + parseInt(Math.random()*10000)
          // 保存图片到public
        let result = fs.writeFileSync(path.join(__dirname, `../public/${key}/${imgName}.${ext}`), buffer)
        if (!result) {
          imgs.push(`/public/${key}/${imgName}.${ext}`)
        }
      })
    }
    res.send({ code: 0, msg: '上传成功', imgs })
  });
})

module.exports = router
