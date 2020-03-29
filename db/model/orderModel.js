
// 用户模型
const mongoose =require('mongoose')
//引入插件
const orderSchema = new mongoose.Schema({
//传建一个schema对象
//其中的数据
    userName:{type:String},
    phoid:{type:String},
    date:{type:String},
    picid:{type:String},
})
const orderModel = mongoose.model('order', orderSchema)
module.exports = orderModel
