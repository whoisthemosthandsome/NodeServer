
// 评论区模型
const mongoose =require('mongoose')
const howSchema = new mongoose.Schema({
  userName:{ type: String,required:true },//评论对象
  content: { type: String,required:true },//评论内容
  url: { type: Array,required:false  },//图片路径
  star: { type: String,required:true },//评分
  staffName:{type: String,required:true },//评论摄影师对象
})
const howModel = mongoose.model('hows', howSchema)
module.exports = howModel
