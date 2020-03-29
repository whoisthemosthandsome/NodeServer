const orderModel = require('../db/model/orderModel')

const orderAdd = async (obj)=>{
    let result = await orderModel.insertMany(obj)
    return result
}

const orderFind = async ()=>{
    let result = await orderModel.find()
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