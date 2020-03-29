
// 客样照模型
const mongoose =require('mongoose')
const picSchema = new mongoose.Schema({
  title: { type: String }, // 标题
  desc: { type: String }, // 描述
  photer: { type: String }, // 摄影师id
  look: { type: String }, // 浏览
  like: { type: String }, // 点赞
  imgs: { type: Array } // 图片
})
const picModel = mongoose.model('pics', picSchema)

module.exports = picModel
