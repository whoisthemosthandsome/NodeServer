const express = require('express')
const router = express.Router()
router.post('/add', (req, res) => {
  let { title, desc, photer, imgs } = req.body
  console.log(req.body)
})
module.exports = router