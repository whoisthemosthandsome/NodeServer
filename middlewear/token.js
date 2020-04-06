const jsonWebToken = require("jsonwebtoken")
const {secret} = require("../config/config")
module.exports=async function(req,res,next){
//   console.log(req.headers.authorization)
  let token = req.headers.authorization.split("Bearer ")[1]
  // console.log(token)
//   console.log(req)
  try {
    // let {userInfo} = jsonWebToken.verify(token,secret)
    // req.userInfo = userInfo
  } catch (err) {
    // console.log(error)
    // return res.send({code:402,msg:'token失效了'})
  }
  await next()

}