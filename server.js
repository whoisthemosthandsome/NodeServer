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

// 摄影师路由
const phpRouter=require('./router/phpRouter')
// 摄影师详情页路由
const phpDetailsRouter=require('./router/phpDetailRouter')
<<<<<<< HEAD
app.use('/php',phpRouter)
app.use('/phpdetails',phpDetailsRouter)

=======

app.use('/banner', bannerRouter)
app.use('/php',phpRouter)
app.use('/phpdetails',phpDetailsRouter)
>>>>>>> self
//评论区
 const howRouter = require('./router/howRouter')
 app.use('/how', howRouter)

// 客样照路由
const picRouter = require('./router/picRouter')
const uploadPic = require('./router/uploadPic')
app.use('/pic', picRouter)
app.use('/pic', uploadPic)

//用户路由
const userRouter = require('./router/userRouter')
app.use('/user',userRouter)

//管理员路由
const loginRouter = require('./router/loginRouter')
app.use('/login',loginRouter)

//预约路由
const bookRouter = require('./router/bookRouter')
app.use('/book',bookRouter)
//订单路由
const orderRouter = require('./router/orderRouter')
app.use('/order',orderRouter)

// 上传图片
const upload = require('./router/upload')
app.use(upload)

app.listen(3001, () => {
  console.log('server start')
})