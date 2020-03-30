var mongoose = require('mongoose');
let phpDetailsModel= new mongoose.Schema({
    // 头像
    imgPath:{type:String},
    // 摄影师名字
    phpName:{type:String},
    // 关注
    phpAtt:{type:String},
    // 职位
    phpPosition:{type:String},
    // 选择数
    phpSelect:{type:String},
    // 常住地
    phpRsident:{type:String},
    // 满意度
    phpSatisfaction:{type:String},
    // 擅长
    phpTitle:{type:String},
    // 简介
    phpSelf:{type:String},
    // 样式图集
    phpRecom:{type:String},
    // 常住地图
    venueImg:{type:String},
    // 档期
    phpAuction:{type:String},
    // 摄影师ID
    phpID:{type:String}
})
let phpDetailSchema=mongoose.model('phpdetails',phpDetailsModel)
module.exports=phpDetailSchema