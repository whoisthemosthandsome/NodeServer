
// 客样照模型
const mongoose =require('mongoose')
const picSchema = new mongoose.Schema({
  title: { type: String }, // 标题
  desc: { type: String }, // 描述
  photer: [{ type:mongoose.Schema.Types.ObjectId, ref: 'phpdetails' }], // 摄影师id关联摄影师集合
  look: { type: String }, // 浏览
  like: { type: String }, // 点赞
  createTime: { type: String }, // 发布时间
  phpType: { type: String }, // 摄影类型
  imgs: { type: Array } // 图片
})
const picModel = mongoose.model('pics', picSchema)

module.exports = picModel
