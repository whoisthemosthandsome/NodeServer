
// 用户模型
const mongoose =require('mongoose')
//引入插件
const orderSchema = new mongoose.Schema({
//传建一个schema对象
//其中的数据
    userName:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    phoid:[{type:mongoose.Schema.Types.ObjectId,ref:'phps'}],
    date:{type:String},
    picid:[{type:mongoose.Schema.Types.ObjectId,ref:'pics'}],
})
const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel
