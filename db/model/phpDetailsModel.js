var mongoose = require('mongoose');
let phpDetailsModel= new mongoose.Schema({
    imgPath:{type:String},
    phpName:{type:String},
    phpAtt:{type:String},
    phpPosition:{type:String},
    phpSelect:{type:String},
    phpRsident:{type:String},
    phpSatisfaction:{type:String},
    phpTitle:{type:String},
    phpSelf:{type:String},
    phpRecom:{type:String},
    venueImg:{type:String},
    phpAuction:{type:String},
    phpID:{type:String}
})
let phpDetailSchema=mongoose.model('phpdetails',phpDetailsModel)
module.exports=phpDetailSchema