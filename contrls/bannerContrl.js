
// 轮播图数据库操作
const bannerModel = require('../db/model/bannerModel')

// 添加轮播图
const bannerAdd = async (obj) => {
  let result = await bannerModel.insertMany(obj)
  return result
}

// 获取轮播图
const bannerGet = async () => {
  let result = await bannerModel.find()
  return result
}

// 删除轮播图
const del = async (_id) => {
  let result = await bannerModel.deleteOne({_id})
  return result
}

module.exports = {
  bannerAdd,
  bannerGet,
  del
}
