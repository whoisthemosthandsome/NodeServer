var mongoose = require('mongoose');
let phpModel= new mongoose.Schema({
    imgPath:{type:String},
    phpName:{type:String},
    phpPosition:{type:String},
    phpSelect:{type:String},
    phpID:{type:String}
})
let phpSchema=mongoose.model('phps',phpModel)
module.exports=phpSchema