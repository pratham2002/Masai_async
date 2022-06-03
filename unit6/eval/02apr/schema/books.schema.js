const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type: String},
    book_front_image_url:{type:String}
})

const Books = mongoose.model("books",booksSchema)

module.exports = Books;
