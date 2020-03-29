const mongoose = require("mongoose")

let adminScheme = mongoose.Schema({
    userName:{type:String,required:true},
    passWord:{type:String,required:true,select:false},
    leavel:{type:String,default:'admin'},
})

let adminModel = mongoose.model("logins",adminScheme)
module.exports = adminModel
