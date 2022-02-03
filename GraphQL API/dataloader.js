const DataLoader = require ('dataloader');
const Book = require ('./models/bookModel');
const keyBy = require ('lodash');

async function batchTittle (tittleIds){
    
    const books = await Book.find({
        _id : {
            $in: tittleIds
        }
    });
    return books;
}

const tittleLoader = () => {
    return new DataLoader( batchTittle)
}

module.exports = () => {
    return {
        tittle:tittleLoader()
    }
}
