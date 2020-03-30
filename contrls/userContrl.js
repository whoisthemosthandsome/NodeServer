
// -----------------用户数据库操作--------------------------
const userModel = require('../db/model/userModel')
  //添加用户
  const userAdd = async (obj) =>{
    let result = await userModel.insertMany(obj)
    return result
  }
  //修改用户信息
  const userUpdata = async (_id,obj) =>{
    let result = await userModel.update({_id},obj)
    // console.log(result)
    return result
  }
  //查看用户
  const userFind = async ()=>{
    let result = await userModel.find()
    return result
  }
  //查询一个用户
  const userFindOne = async (_id)=>{
    let result = await userModel.find({_id})
    return result
  }
  //删除用户
  const userDel = async (_id)=>{
    let result = await userModel.deleteOne({_id})
    return result
  }
  // 分页查询用户
const userPage = async (page, pageSize) => {
  let list = await userModel.find().sort({_id: -1}).skip((page - 1) * pageSize).limit(pageSize)
  let count = await userModel.find()
  count = count.length
  return { list, count }
}
module.exports = {userAdd,userUpdata,userFind,userDel,userPage,userFindOne}
