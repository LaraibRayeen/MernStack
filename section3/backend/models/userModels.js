const {Schema , model} = require('../connection');
 // here we are defining the structure of model
const myschema = new Schema({
    username: String , 
    email: String,
    password: String,
    age : Number

});



module.exports=model('user', myschema);