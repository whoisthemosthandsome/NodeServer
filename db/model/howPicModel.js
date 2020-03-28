
// 客样照模型
const mongoose =require('mongoose')
const howPicSchema = new mongoose.Schema({
  title: { type: String },
  userName:{type:String,required:ture},
  path: { type: Array,required:ture }
})
const howPicModel = mongoose.model('howPics', howPicSchema)

module.exports = howPicModel
