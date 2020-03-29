
// 客样照数据库操作
const picModel = require('../db/model/picModel')

// 添加客样照
const picAdd = async (obj) => {
  let result = await picModel.insertMany(obj)
  return result
}

// 查询所有客样照
const picGet = async () => {
  let result = await picModel.find()
  return result
}

// 分页查询客样照
const picGetByPage = async (page, pageSize) => {
  let list = await picModel.find().sort({_id: -1}).skip((page - 1) * pageSize).limit(pageSize).populate('photer', 'phpName -_id')
  let count = await picModel.find()
  count = count.length
  return { list, count }
}

// 通过id查询客样照
const picGetById = async (_id) => {
  let list = await picModel.find({_id}).populate('photer', 'phpName phpRsident imgPath')
  // phpName 摄影师名称 phpRsident 常驻馆 imgPath摄影师头像
  return list
}

// 添加客样照
const picUpdate = async (_id, obj) => {
  let result = await picModel.updateOne({ _id }, obj)
  return result
}

// 删除客样照
const picDel = async (_id) => {
  let result = picModel.deleteOne({_id})
  return result
}

module.exports = {
  picAdd,
  picGet,
  picGetByPage,
  picGetById,
  picUpdate,
  picDel
}
