const mongoose = require ('mongoose');

const shelfSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : String,
})

const Shelf = mongoose.model('shelf', shelfSchema);
module.exports = Shelf;