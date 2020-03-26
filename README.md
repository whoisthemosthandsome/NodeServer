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