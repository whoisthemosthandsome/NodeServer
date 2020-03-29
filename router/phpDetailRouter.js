const express=require('express')
const router =express.Router()
const phpDetailsModel=require('../db/model/phpDetailsModel')
const path=require('path')
const fs=require('fs')
var multer  = require('multer')
var upload = multer({})
router.post('/insertphp',(req,res)=>{
   let {imgPath,phpName,phpAtt,phpPosition,phpSelect,phpRsident,phpSatisfaction,phpTitle,phpSelf,phpRecom,venueImg,phpAuction,phpID}=req.body
   phpDetailsModel.insertMany({imgPath,phpName,phpAtt,phpPosition,phpSelect,phpRsident,phpSatisfaction,phpTitle,phpSelf,phpRecom,venueImg,phpAuction,phpID}).then((data)=>{
       res.send({code:0,msg:'插入成功'})
   }).catch((data)=>{
       console.log(data)
    res.send({code:-1,msg:'插入失败'})
   })
})
router.post('/file',upload.single('xixi'),(req,res)=>{
    let {buffer}=req.file
    let imgName=(new Date()).getTime()+'_photographer_'+parseInt(Math.random())*1234
    fs.writeFile(path.join(__dirname,`../www/img/${imgName}.jpg`),buffer,(err)=>{
        if(err) {
            console.log(err)
            res.send({code:-1,msg:'上传失败'})
        }else{
            res.send({code:0,msg:'图片上传成功',path:`public/phpimg/${imgName}.jpg`})
        }
    })
})
router.post('/getphp',(req,res)=>{
    phpDetailsModel.find({}).then((data)=>{
        res.send({code:0,msg:'查询成功',data})
    })
})
router.get('/phpdel',(req,res)=>{
    let {_id} =req.query
    phpDetailsModel.deleteOne({_id}).then((data)=>{
        res.send({code:0,msg:'删除成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'删除失败',err})
    })
})
router.post('/phpupdate',(req,res)=>{
    let {_id,phpPosition}=req.body
    phpDetailsModel.updateOne({_id},{phpPosition}).then(()=>{
        res.send({code:0,msg:'更新成功'})
    }).catch((err)=>{
        res.send({code:-1,msg:'更新失败',err})
    })
})

module.exports=router