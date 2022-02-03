const mongoose = require ('mongoose');

const shelfSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : String,
    tittle : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'book'
    }]
})

const Shelf = mongoose.model('shelf', shelfSchema);
module.exports = Shelf;