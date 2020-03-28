
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
  let list = await picModel.find().sort({_id: -1}).skip((page - 1) * pageSize).limit(pageSize)
  let count = await picModel.find()
  count = count.length
  return { list, count }
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
  picDel
}
