
// 评论区模型
const mongoose =require('mongoose')
const howSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: { type: String },
  url: { type: String }
})
const howModel = mongoose.model('how', howSchema)

=======
  userName:{ type: String,required:true },//评论对象
  content: { type: String,required:true },//评论内容
  url: { type: String,required:false  },//图片路径
  star: { type: String,required:true },//评分
  staffName:{type: String,required:true },//评论对象
  // time:{type:Data }
})
const howModel = mongoose.model('hows', howSchema)
//抛出
>>>>>>> 2606d768f20aecf5b8248418186ca0d59eabab6d
module.exports = howModel
