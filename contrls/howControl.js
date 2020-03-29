
// -----------------评论区数据库操作--------------------------
const howModel = require('../db/model/howModel')
//图片增加
const picAdd = async ({obj}) =>{
  let result = await howModel.insertMany(obj)
  return result
}
//评论增加
let howAdd = async (obj) => {
  console.log('control',obj)
  let result = await howModel.insertMany(obj)
  return result
}
//删除评论
let howDel = async (_id)=>{//通过传一个评论的id来删除
  let result = await howModel.deleteOne({_id})
  console.log(result)
  return result
}
//用户查看评论
let howList = async(userName)=>{//通过用户的名字来查看所有该用户的评论发布
  let result = await howModel.find({userName})
  return result
}
//管理员查看评论
let allList = async ()=>{
  let result = await howModel.find()
  return result
}
//分页
let ByPage = async (page,pageSize)=>{
    let  allFood = await howModel.find() 
    // 总数据条数
    let  allCount = allFood.length
    // 每一页的数据
    let result =await howModel.find().skip((Number(page)-1)*pageSize).limit(Number(pageSize))
    return {result,allCount}
}
//得到图片
// let showPic = async (_id) =>{
//   let result = await 
// }
module.exports = {
  howAdd,howList,howDel,picAdd,allList,ByPage
}
