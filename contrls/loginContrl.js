
// -----------------管理员库操作--------------------------
const loginModel = require('../db/model/loginModel')
  //添加管理员
  const loginAdd = async (obj) =>{
    let result = await loginModel.insertMany(obj)
    return result
  }
  //查看管理员
  const loginFind = async ()=>{
    let result = await loginModel.find()
    return result
  }
  //查看一个管理员
  const loginFindOne = async ({userName,passWord})=>{
    let result = await loginModel.find({userName,passWord})
    return result
  }
  //删除管理员
  const loginDel = async (_id)=>{
    let result = await loginModel.deleteOne({_id})
    return result
  }
  const loginup = async (_id)=>{
    let result = await loginModel.find({_id})
    return result
  }
  //修改管理员信息
  const loginUpdata = async (_id,obj) =>{
    let result = await loginModel.updateOne({_id},{obj})
    console.log(result)
    return result
  }
module.exports = {loginAdd,loginUpdata,loginFind,loginDel,loginFindOne,loginup}
