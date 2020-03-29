
// 用户模型
const mongoose =require('mongoose')
//引入插件
const userSchema = new mongoose.Schema({
//传建一个schema对象
//其中的数据
    userName:{type:String},
    phoneNumber:{type:String},
    order:{type:String},
    avatar:{type:String}
})
const userModel = mongoose.model('user', userSchema)
module.exports = userModel
