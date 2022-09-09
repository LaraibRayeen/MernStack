const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const Model = require('../models/userModels');

router.post('/add',(req,res)=> {
    
    console.log(req.body)
    //add operaton
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
        
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
})

router.get('/getall',(req,res)=>{
    Model.find()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
        
    });
})

router.get('/getbyusername/:username',(req,res)=>{
    console.log(req.params.username)
    Model.find({username:req.params.username})
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });

})

router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.put('/update/:id',(req,res)=>{
  
    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})
// exporting
module.exports = router