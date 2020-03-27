
// 客样照模型
const mongoose =require('mongoose')
const picSchema = new mongoose.Schema({
  title: { type: String },
  desc: { type: String },
  photer: { type: String },
  look: { type: String },
  collect: { type: String },
  imgs: { type: Array }
})
const picModel = mongoose.model('pics', picSchema)

module.exports = picModel
