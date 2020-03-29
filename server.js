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
// 摄影师路由
const phpRouter=require('./router/phpRouter')
// 摄影师详情页路由
const phpDetailsRouter=require('./router/phpDetailRouter')

app.use('/banner', bannerRouter)
app.use('/php',phpRouter)
app.use('/phpdetails',phpDetailsRouter)
app.listen(3001, () => {
  console.log('server start')
})