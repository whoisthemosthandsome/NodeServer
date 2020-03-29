const mongoose = require("mongoose")

let adminScheme = mongoose.Schema({
    userName:{type:String,required:true},
    passWord:{type:String,required:true},
    leavel:{type:String,default:'admin'},
})

let loginModel = mongoose.model("logins",adminScheme)
module.exports = loginModel
