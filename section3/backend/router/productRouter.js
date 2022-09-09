const express = require('express');
const router = express.Router();
const Model = require('../models/productModel')

router.post('/add',(req,res)=> {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        console.log('product added successfully');
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
        console.log("errr");
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

router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;