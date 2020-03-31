
// -----------------评论区数据库操作--------------------------
const howModel = require('../db/model/howModel')
//图片增加
const picAdd = async ({obj}) =>{
  let result = await howModel.insertMany(obj)
  return result
}
//评论增加
let howAdd = async (obj) => {
  
  let result = await howModel.insertMany(obj)
  return result
}
//删除评论
let howDel = async (_id)=>{//通过传一个评论的id来删除
  let result = await howModel.deleteOne({_id})
  
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
    let result =await howModel.find().sort({_id: -1}).skip((Number(page)-1)*pageSize).limit(Number(pageSize))
   // .populate('staffName', 'phpName -_id')

    return {result,allCount}
}
//通过用户名得到平均分
let getScore = async (staffName) =>{
  let list = await howModel.find({staffName})
  let allScore=0
  for(var i in list){
    allScore+=Number(list[i].star)
  }
  let result=(allScore/list.length)
  return result
}
//通过搜索关键字得到摄影师对应信息
let byKw = async (kw,page,pageSize) =>{
  let regex = new RegExp(kw)
  // 满足条件的所有数据
  let allFood =await  howModel.find({staffName:{$regex:regex}})
  let allCount= allFood.length
  // 分页后满足关键字的数据
  let result= await howModel.find({staffName:{$regex:regex}}).sort({_id: -1})
  .skip(Number((page-1)*pageSize)).limit(Number(pageSize))
  return  {result,allCount}
}

module.exports = {
  howAdd,howList,howDel,picAdd,allList,ByPage,getScore,byKw
}
