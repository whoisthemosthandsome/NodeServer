
// 客样照数据库操作
const picModel = require('../db/model/picModel')

// 添加客样照
const picAdd = async (obj) => {
  let result = await picModel.insertMany(obj)
  return result
}



module.exports = {
  picAdd
}