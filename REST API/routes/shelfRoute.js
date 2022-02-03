const express = require('express');
const router = express.Router();
const book = require('../models/bookModel')
const shelf = require ('../models/shelfModel');

router.post('/shelfs',async(req,res)=>{
    const Shelf = new shelf ({
        name: req.body.name,
        capacity: req.body.capacity,
        block: req.body.block,
        Book :  req.body.Book
    });
    try{
        await Shelf.save();
        res.send(Shelf)
    } catch(error){
        res.send(error)
    }
});

router.get('/shelfs',async (req,res)=>{
    try{
        const shelfs = await shelf.find({}).populate('Book')
        if (!shelfs){
            res.send({
                message:"There is no shelf."
            })
        } else
        res.send({shelfs})
    } catch(error){
        res.send({message:"Error retrieving data"})
    }
});

router.get('/shelfs/:_id',async(req,res)=>{
    try{
        const shelfs = await shelf.findById({_id:req.params._id}).populate('Book')    
        if(!shelfs) {
            res.send({
                message: "Data not found with id " + req.params._id
            });            
        } else {
            res.send(shelfs);
        }
    } catch(error){
        res.send({message:"Error while retrieving data with"})
    }
});

router.put('/shelfs/:_id',async(req,res)=>{
    try{
    const updateShelf = await shelf.findByIdAndUpdate({_id:req.params._id},{
        name: req.body.name,
        capacity: req.body.capacity,
        block: req.body.block,
        Book :  req.body.Book
    },{new:true, useFindAndModify:false})
        if(!updateShelf){
            res.send({message:"Some error occurred while updating the Data with Id "+req.params._id})
        } else res.send(updateShelf)
    } catch(error){
        res.send({message:"Some error occurred while updating the Data"});
    }
});

router.delete('/shelfs/:_id',async(req,res)=>{
    try{
        const deleteShelf = await shelf.findByIdAndDelete({_id:req.params._id})
        if (!deleteShelf){
            res.send({"message":"Shelf can't be found with Id "+req.params._id})
        } else res.send({message:"Shelf successfully deleted"})
    } catch(error){
        res.send({message:"Error while deleting data"})
    }    
});


module.exports = router;