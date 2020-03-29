const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    userName:{type:String},
    phoName:{type:String},
    date:{type:String}
})
const bookModel = mongoose.model("book",bookSchema)

module.exports = bookModel
