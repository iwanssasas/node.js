const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    tittle: {
        type : String,
        required : true,
    },
    quantity: {
        type : Number,
        required : true,
    },
    genre:String,
    author:[{
        firstname: String,
        lastname: String
      }]
});

const Book = mongoose.model(
    "Book", BookSchema
);

  
module.exports = Book;