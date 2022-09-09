//  import express module
const express = require('express');
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productRouter') 
const videoRouter = require('./router/videoRouter') 
const cors = require('cors');


//  initializing express app
const app = express()

const port = 5000;
// converting json into js
app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}))
// middle ware

app.use('/user',userRouter);
app.use('/video',videoRouter);
app.use('/product',productRouter);



//  route endpoint

app.get('/',(req,res)=>{
    res.send('response from express')
})

app.get('/home',(req,res)=>{
    res.send('response from home')
})
 

//  starting thr server 
app.listen(port,()=> {
 console.log('hello server');
});