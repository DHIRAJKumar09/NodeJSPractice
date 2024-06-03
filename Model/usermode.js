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
       
    }
});




const User = mongoose.model('users',UserSchema);

const validate = (data)=>{
    const schema =joi.object({
        name:joi.string().required().label("name"),
        email:joi.string().label("email").required(),
        password:joi.string().label("password").required(),
    })
    return schema.validate(data);
}
module.exports = {User,validate};