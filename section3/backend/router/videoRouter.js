const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=> {
    res.send('response from video router')
})

router.get('/dellet',(req,res)=> {
    res.send('response from video router dellet ')
}) 

router.get('/update',(req,res)=> {
    res.send('response from video router update')
}) 

// exporting
module.exports = router