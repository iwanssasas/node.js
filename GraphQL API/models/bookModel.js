const mongoose = require ('mongoose');

const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : Number,
    bookshelf : String

})

const Book = mongoose.model('book', bookSchema);
module.exports = Book;