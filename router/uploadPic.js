const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({})

router.post('/uploadPic', upload.array('pic'), (req, res) => {
  console.log(req.files)
})

module.exports = router