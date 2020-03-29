const bookModel = require('../db/model/bookModel')
//预约操作
//添加预约
const bookAdd = async (obj)=>{
    let result = await bookModel.insertMany(obj)
    return result
}
//查看预约
const bookFindUser = async (userName)=>{
    let result = await bookModel.find({userName})
    // console.log(result)
    return result
}
const bookFindPho = async (phoName)=>{
    let result = await bookModel.find({phoName})
    // console.log(result)
    return result
}
const bookFind = async ()=>{
    let result = await bookModel.find()
    // console.log(result)
    return result
}
const bookDel = async (_id)=>{
    let result = await bookModel.deleteOne({_id})
    return result
}
module.exports ={bookAdd,bookFind,bookDel,bookFindUser,bookFindPho}

