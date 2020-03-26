
// 轮播图数据库操作
const bannerModel = require('../db/model/bannerModel')

const bannerAdd = async (obj) => {
  let result = await bannerModel.insertMany(obj)
  return result
}

module.exports = {
  bannerAdd
}
