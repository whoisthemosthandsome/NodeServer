
// 轮播图模型
const mongoose =require('mongoose')
const bannerSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String }
})
const bannerModel = mongoose.model('banners', bannerSchema)

module.exports = bannerModel
