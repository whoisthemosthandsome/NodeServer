# NodeServer
1. db->model 数据库模型
2. contrls 数据库操作js文件
3. public 静态资源文件夹 存放图片
4. router 路由

## 图片命名
时间戳+图片所属模块+4位随机数
eg: 1585232587336_banner_5289.jpeg

## 多字段上传图片
1. 使用一个接口可以上传多个字段名的图片 图片保存到public时 会加上对应的字段名 以便于区分自己上传的图片
2. 添加字段名 添加字段名后 要在public里面新建名字为字段名的文件夹 图片保存到该文件夹中
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

### 删除public中的图片
1. 删除图片时建议先删除public中的图片再删除数据库里面的数据 减少public文件夹里的无用图片
2. 删除public中图片代码
  imgs.map((item) => {
    fs.unlinkSync(path.join(__dirname, `..${item}`))
  })
3. 举例  前端传_id 和 图片路径数组
// 删除客样照
router.post('/del', (req, res) => {
  let { _id, imgs } = req.body
  // 删除public中的图片
  imgs.map((item) => {
    fs.unlinkSync(path.join(__dirname, `..${item}`))
  })
  // 删除数据库中客样照
  picDel(_id)
  .then(() => {
    res.send({code: 0, msg: '删除成功'})
  })
  .catch((stack) => {
    res.send({code: -1, msg: '删除失败', stack})
  })
})

### populate
教程地址：https://segmentfault.com/a/1190000002727265
1. 用途：实现在一个 document 中填充其他 collection(s) 的 document(s)。
2. 原理：在定义Schema的时候，如果设置某个 field 关联另一个Schema，那么在获取document 的时候就可以使用 Population 功能通过           关联Schema的 field 找到关联的另一个 document，并且用被关联 document 的内容替换掉原来关联字段(field)的内容。
3. 使用
   1. 数据库模型中关联其他集合
   语法：  字段名:[{ type: 关联方式, ref: 关联的集合名 }]
   举例：  photer: [{ type:mongoose.Schema.Types.ObjectId, ref: 'phpdetails' }]
   2. 查询时获取关联集合的数据 (填充数据空格隔开) (返回数据类型为数组)
   语法：  populate('填充字段(关联其他集合的字段名)', '需要填充的数据 -不填充的数据')
   举例：  picModel.find().populate('photer', 'phpName phpRsident imgPath -_id')
   填充结果: photer: [{ phpName: 'a', phpRsident: 'b', imgPath: 'c' }]
   3. 注意：查询时默认填充 _id 若不填充_id  加上 -_id

4. 问题
   1. 前端添加数据 
      关联其他集合的字段 传入关联的集合中关联的某条数据对应的 _id
      关联其他集合的字段 数据库中存储数据类型为 数组
      前端添加时 传入数据为数组或字符串都可以识别
      举例： { photer: '7386eur' } 或者 { photer: ['7386eur'] }
   2. 关联的某条数据对应的 _id 传入错误
      前端添加数据时 传入的 _id 如果在关联集合里匹配失败 会报错
   3. 查询时 未匹配到关联的数据
      如果在前端添加数据后 关联集合里 关联的该数据被删除 返回空数组
      前端使用数据时 需做判断返回数组是否为空 否则会报错

### apidoc
1. 接口前添加注释
    /**
    * @api {post} /pic/add 添加客样照
    * @apiName add 
    * @apiGroup pic
    *
    * @apiParam {String} title 标题
    * @apiParam {String} desc 描述
    * @apiParam {String} photer 摄影师_id
    * @apiParam {Array} imgs 图片路径
    * @apiParam {String} phpType 摄影类型
    * @apiParam {String} states 发布状态
    *
    * @apiSuccess {Number} code 状态码
    * @apiSuccess {String} msg  提示信息
    * @apiSuccess {String} stack  错误信息
    */
2. 生成接口文档
  apidoc -i router -o doc
3. 查看接口文档
  doc->index.html