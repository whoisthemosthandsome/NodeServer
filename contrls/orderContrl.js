const orderModel = require('../db/model/orderModel')

const orderAdd = async (obj)=>{
    let result = await orderModel.insertMany(obj)
    return result
}

const orderFind = async ()=>{
    let result = await orderModel.find().populate('userName',"userName _id").populate('phoid',"phpName _id").populate('picid',"phpType imgs _id")
    return result
}
const orderFindOne = async (userName)=>{
    let result = await orderModel.find({userName})
    return result
}
const orderDel = async (_id)=>{
    let result = await orderModel.deleteOne({_id})
    return result
}
module.exports = {orderAdd,orderFind,orderFindOne,orderDel}