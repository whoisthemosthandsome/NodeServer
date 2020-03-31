const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name:[{type:mongoose.Schema.Types.ObjectId,ref:'user'}],
    phoName:[{type:mongoose.Schema.Types.ObjectId,ref:'phps'}],
    date:{type:String}
})
const bookModel = mongoose.model("book",bookSchema)

module.exports = bookModel
