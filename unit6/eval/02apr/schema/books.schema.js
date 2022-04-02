const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type: mongoose.Schema.Types.ObjectId,ref:"user"},
    book_front_image_url:{type:String}
})

const Books = mongoose.model("books",booksSchema)

module.exports = Books;
