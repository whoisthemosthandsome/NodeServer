const phpDetailsModel = require('../db/model/phpDetailsModel')
let findPhpDetailsByPage = async (page,pageSize)=>{
    let  all = await phpDetailsModel.find() 
    // 总数据条数
    let  allCount = all.length
    // 每一页的数据
    let result =await phpDetailsModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
  }
  module.exports={
    findPhpDetailsByPage
}