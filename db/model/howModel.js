
// 评论区模型
const mongoose =require('mongoose')
const howSchema = new mongoose.Schema({
<<<<<<< HEAD
  userName:{ type: String,required:true },//发表评论的用户名
=======
<<<<<<< HEAD
  name: { type: String },
  url: { type: String }
})
const howModel = mongoose.model('how', howSchema)

=======
  userName:{ type: String,required:true },//评论对象
>>>>>>> 97f66ecaca435c624a0977193621a7c9728a6819
  content: { type: String,required:true },//评论内容
  url: { type: Array,required:false  },//图片路径
  star: { type: String,required:true },//评分
  staffName:{type: String,required:true },//评论摄影师对象
  // time:{type:Data }
})
const howModel = mongoose.model('hows', howSchema)
//抛出
>>>>>>> 2606d768f20aecf5b8248418186ca0d59eabab6d
module.exports = howModel
