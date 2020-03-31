const bookModel = require('../db/model/bookModel')
//预约操作
//添加预约
const bookAdd = async (obj)=>{
    let result = await bookModel.insertMany(obj)
    return result
}
//根据用户查看预约
const bookFindUser = async (name)=>{
    let result = await bookModel.find({name})
    // console.log(result)
    return result
}
//根据摄影师查看
const bookFindPho = async (phoName)=>{
    let result = await bookModel.find({phoName})
    // console.log(result)
    return result
}
//查看
const bookFind = async ()=>{
    let result = await bookModel.find().populate('name',"userName _id").populate('phoName',"phpName _id")
    // console.log(result)
    return result
}
//删除
const bookDel = async (_id)=>{
    let result = await bookModel.deleteOne({_id})
    return result
}
module.exports ={bookAdd,bookFind,bookDel,bookFindUser,bookFindPho}

