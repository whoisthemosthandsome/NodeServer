const express=require('express')
const router =express.Router()
const phpModel=require('../db/model/phpModel')
const path=require('path')
const fs=require('fs')
var multer  = require('multer')
var upload = multer({})
// 添加摄影师
router.post('/insertphp',(req,res)=>{
   let {imgPath1,phpName1,phpPosition1,phpSelect1,phpID1}=req.body
   console.log(imgPath1,phpName1,phpPosition1,phpSelect1,phpID1)
   phpModel.insertMany({imgPath:imgPath1,phpName:phpName1,phpPositionL:phpPosition1,phpSelect:phpSelect1,phpID:phpID1}).then((data)=>{
       res.send({code:0,msg:'插入成功'})
   }).catch((data)=>{
    res.send({code:-1,msg:'插入失败'})
   })
})
// 单文件上传
router.post('/file',upload.single('xixi'),(req,res)=>{
    let {buffer}=req.file
    console.log(buffer)
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
// 查询所有摄影师
router.post('/getphp',(req,res)=>{
    phpModel.find({}).then((data)=>{
        res.send({code:0,msg:'查询成功',data})
    })
})
// 删除摄影师
router.get('/phpdel',(req,res)=>{
    let {_id} =req.query
    console.log(_id)
    phpModel.deleteOne({_id}).then((data)=>{
        res.send({code:0,msg:'删除成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'删除失败',err})
    })
})
// 更新摄影师数据
router.post('/phpupdate',(req,res)=>{
    let {_id,updateList}=req.body
    phpModel.updateOne({_id},updateList).then(()=>{
        res.send({code:0,msg:'更新成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'更新失败',err})
    })
})
// 根据_id查找有个摄影师数据
router.post('/phpfindone',(req,res)=>{
    let {_id}=req.body
    phpModel.findOne({_id}).then((data)=>{
        res.send({code:0,msg:"查询成功",data})
    }).catch((err)=>{
        res.send({code:0,msg:"查询失败"})
    })
})
// 根据摄影师ID查找一条摄影师数据
router.post('/phpfindonebyid',(req,res)=>{
    let {ID}=req.body
    console.log(ID)
    phpModel.findOne({phpID:ID}).then((data)=>{
        res.send({code:0,msg:"查询成功",data})
    }).catch((err)=>{
        res.send({code:0,msg:"查询失败"})
    })
})
module.exports=router