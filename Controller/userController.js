// const User = require('../Model/usermode')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const {User} = require('../Model/usermode');


 async function registration  (req,res){
    const {name,email,password} = req.body;
    try{
        let user =await User.findOne({email:email});
        if(user){
           return res.status(400).json({message:"user already register"});
        }
        let hashpassword = await bcrypt.hash(password,10);
        
        user =  new User({name:name,email:email,password:hashpassword});
        await user.save();
        
        res.status(201).json({message:"registration successfully" ,user:user});
    }catch(error){
        console.error("error found :",error);
        res.status(500).json({error:'Internal server errror'});
    }
}

async function login (req,res){
    const{email,password} = req.body;
    try{
        let user = await User.findOne({email:email});
       
        if(!user){
           return res.status(400).json({message:"user not found , First register"});
        }
    
        const decodepassword = await bcrypt.compare(password,user.password);
        if(!decodepassword){
           return res.status(400).json({message:"password is not match,try again"});
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({message:"login successfully",user:[user.name,user.email],token:token});
    }catch(error){
        console.error("error found ", error);

    }
}




module.exports = {registration,login};