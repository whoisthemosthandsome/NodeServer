const phpModel = require('../db/model/phpModel')
let findPhpByPage = async (page,pageSize)=>{
    let  all = await phpModel.find() 
    // 总数据条数
    let  allCount = all.length
    // 每一页的数据
    let result =await phpModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
  }
  module.exports={
    findPhpByPage
}