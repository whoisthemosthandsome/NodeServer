const express=require('express')
const router =express.Router()
const phpDetailsModel=require('../db/model/phpDetailsModel')
const path=require('path')
const fs=require('fs')
const {findPhpDetailsByPage} = require('../contrls/phpDetailsContrl')
var multer  = require('multer')
var upload = multer({})
// 添加
router.post('/insertphp',(req,res)=>{
   let {imgPath,phpName,phpAtt,phpPosition,phpSelect,phpRsident,phpSatisfaction,phpTitle,phpSelf,phpRecom,venueImg,phpAuction,phpID}=req.body
   phpDetailsModel.insertMany({imgPath,phpName,phpAtt,phpPosition,phpSelect,phpRsident,phpSatisfaction,phpTitle,phpSelf,phpRecom,venueImg,phpAuction,phpID}).then((data)=>{
       res.send({code:0,msg:'插入成功'})
   }).catch((data)=>{
    res.send({code:-1,msg:'插入失败'})
   })
})
// 单文件处理
router.post('/file',upload.single('xixi'),(req,res)=>{
    let {buffer}=req.file
    let imgName=(new Date()).getTime()+'_photographer_'+parseInt(Math.random())*1234
    fs.writeFile(path.join(__dirname,`../public/phpimg/${imgName}.jpg`),buffer,(err)=>{
        if(err) {
            console.log(err)
            res.send({code:-1,msg:'上传失败'})
        }else{
            res.send({code:0,msg:'图片上传成功',path:`http://localhost:3001/public/phpimg/${imgName}.jpg`})
        }
    })
})
// 找全部
router.post('/getphp',(req,res)=>{
    phpDetailsModel.find({}).then((data)=>{
        res.send({code:0,msg:'查询成功',data})
    })
})
// 删除
router.get('/phpdel',(req,res)=>{
    let {_id} =req.query
    phpDetailsModel.deleteOne({_id}).then((data)=>{
        res.send({code:0,msg:'删除成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'删除失败',err})
    })
})
// 更新
router.post('/phpupdate',(req,res)=>{
    let {_id,updateList}=req.body
    phpDetailsModel.updateOne({_id},updateList).then(()=>{
        res.send({code:0,msg:'更新成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'更新失败',err})
    })
})
// 根据传入数据找分页信息
router.post('/fdp',(req,res)=>{
    let page = req.body.page
    let pageSize = req.body.pageSize
    findPhpDetailsByPage(page,pageSize)
    .then((data)=>{
        let {result} =data
      res.send({err:0,msg:'查询成功',result})
    })
    .catch((err)=>{res.send({err:-1,msg:'查询失败请重试'})})
})
// 找一个人信息
router.post('/phpfindone',(req,res)=>{
    let {_id}=req.body
    phpDetailsModel.findOne({_id}).then((data)=>{
        res.send({code:0,msg:"查询成功",data})
    }).catch((err)=>{
        res.send({code:0,msg:"查询失败"})
    })
})
module.exports=router