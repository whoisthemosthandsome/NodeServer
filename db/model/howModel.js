
// 评论区模型
const mongoose =require('mongoose')
const howSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String }
})
const howModel = mongoose.model('how', howSchema)

module.exports = howModel
