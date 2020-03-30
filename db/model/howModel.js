
// 评论区模型
const mongoose =require('mongoose')
const howSchema = new mongoose.Schema({
  createTime:{type:String,required:true},//发表评论的时间
  userName:{type: String,required:true },//评论对象
  content: { type: String,required:true },//评论内容
  url: { type: Array,required:false  },//图片路径
  star: { type: String,required:true },//评分
  staffName:{type: String,required:true }
  //staffName:[{ type:mongoose.Schema.Types.ObjectId, ref: 'phpdetails'}],//评论摄影师对象
})
const howModel = mongoose.model('hows', howSchema)
//抛出
module.exports = howModel
