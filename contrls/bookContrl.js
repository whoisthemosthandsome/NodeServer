const bookModel = require('../db/model/bookModel')
//预约操作
//添加预约
const bookAdd = async (obj)=>{
    let result = await bookModel.insertMany(obj)
    return result
}
//查看预约
const bookFind = async (userName)=>{
    let result = await bookModel.find({userName})
    return result
}
const bookDel = async (_id)=>{
    let result = await bookModel.deleteOne({_id})
    return result
}
module.exports ={bookAdd,bookFind,bookDel}

