const mongoose = require("mongoose");

const ShelfSchema = new mongoose.Schema({
    name: String,
    capacity: Number,
    block:String,
    Book : [{ type : mongoose.Types.ObjectId, ref: 'Book' }]
  });

const Shelf = mongoose.model(
    "Shelf", ShelfSchema
);

  
module.exports = Shelf;