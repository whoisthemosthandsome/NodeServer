# NodeServer
1. db->model 数据库模型
2. contrls 数据库操作js文件
3. public 静态资源文件夹 存放图片
4. router 路由
# 删除public中的图片
删除图片时建议先删除public中的图片再删除数据库里面的数据 减少public文件夹里的无用图片
eg：
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
  .catch((err) => {
    console.log(err)
    res.send({code: -1, msg: '删除失败'})
  })
})
## 图片命名
时间戳+图片所属模块+4位随机数
eg: 1585232587336_banner_5289.jpeg

## 多字段上传图片
1. 使用一个接口可以上传多个字段名的图片 图片保存到public时 会加上对应的字段名 以便于区分自己上传的图片
2. 添加字段名
  在router->upload 中 添加字段名
  ```
    // 多字段名上传图片
    // 在此处加上要上传图片的字段
    let multipleFields = upload.fields([
      {name:'pic'},
      {name:'how'}
    ])
  ```
3. 使用
  接口：localhost:3001/upload
  postman 输入：
  key: 对应的字段名
  value: 选择要上传的图片 可选多张
4. 返回
  code msg imgs
{
    "code": 0,
    "msg": "上传成功",
    "imgs": [
        "/public/1585380222168_pic_6131.jpeg",
        "/public/1585380222292_pic_5333.jpeg",
        "/public/1585380222297_how_9397.jpeg",
        "/public/1585380222304_how_2656.jpeg"
    ]
}