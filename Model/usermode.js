const { default: mongoose } = require("mongoose");
const jwt = require('jsonwebtoken');
const joi = require('joi');
const PasswordComplexity = require('joi-password-complexity');


const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
       
    },
    userType:{
        type:String,
        enum:['admin','user','premium','guest'],default:'user'
    },
    avatar:{
        type:String,
       
    }


});




const User = mongoose.model('users',UserSchema);


module.exports = {User};