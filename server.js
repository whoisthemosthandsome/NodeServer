const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

// 静态资源路径
app.use('/public', express.static(path.join(__dirname, '/public')))
// 跨域
app.use(cors())
// 解析post
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 连接数据库
require('./db/connection')
// 轮播图路由
const bannerRouter = require('./router/bannerRouter')
app.use('/banner', bannerRouter)

app.listen(3000, () => {
  console.log('server start')
})