const express = require('express');
const router = express.Router();
const book = require ('../models/bookModel');

router.post('/books',async(req,res)=>{
    const Book = new book ({
        tittle: req.body.tittle,
        quantity: req.body.quantity,
        genre:req.body.genre,
        author: req.body.author
    });
    try{
        await Book.save();
        res.send(Book)
    } catch(error){
        res.send(error)
    }
});

router.get('/books',async (req,res)=>{
    try{
        const books = await book.find({})
        if (!books){
            res.send({message:"There is no book."})
        } else
        res.send({books})
    } catch(error){
        res.send({message:"Error retrieving data"})
    }
});

router.get('/books/:_id',async(req,res)=>{
    try{
        const books = await book.findById({_id:req.params._id})    
        if(!books) {
            res.send({
                message: "Data not found with id " + req.params._id
            });            
        } else {
            res.send(books);
        }
    } catch(error){
        res.send({message:"Error while retrieving data with"})
    }
});

router.put('/books/:_id',async(req,res)=>{
    try{
    const updateBook = await book.findByIdAndUpdate({_id:req.params._id},{
        tittle: req.body.tittle,
        quantity: req.body.quantity,
        genre:req.body.genre,
        author: req.body.author
    },{new:true, useFindAndModify:false})
        if(!updateBook){
            res.send({message:"Some error occurred while updating the Data with Id "+req.params._id})
        } else res.send(updateBook)
    } catch(error){
        res.send({message:"Some error occurred while updating the Data"});
    }
});

router.delete('/books/:_id',async(req,res)=>{
    try{
        const deleteBook = await book.findByIdAndDelete({_id:req.params._id})
        if (!deleteBook){
            res.send({"message":"Book can't be found with Id "+req.params._id})
        } else res.send({message:"Book successfully deleted"})
    } catch(error){
        res.send({message:"Error while deleting data"})
    }    
});

module.exports = router;
