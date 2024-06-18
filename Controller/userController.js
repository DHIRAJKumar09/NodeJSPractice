// const User = require('../Model/usermode')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const joi = require('joi');

const {User} = require('../Model/usermode');


 async function registration  (req,res){
    const { name, email, password, userType } = req.body;
    console.log(req.body);
    console.log(req.file);
    const avatar = req.file?req.file.filename:'abc.jpg' ;
   console.log(avatar);
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      user = new User({
        name,
        email,
        password: hashedPassword,
        userType,
        avatar
      });
  
      await user.save();
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
      console.log( { name: user.name, email: user.email, userType: user.userType, avatar: user.avatar });
  
      res.status(201).json({
        message: "User registered successfully",
        user: { name: user.name, email: user.email, userType: user.userType, avatar: user.avatar },
        token: token
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
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
        const token = jwt.sign({ id: user._id,userType: user.userType}, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.status(200).json({
          message: "Login successful",
          user: { name: user.name, email: user.email, avatar: user.avatar },
          token: token
        });
    }catch(error){
        console.error("error found ", error);

    }
}




module.exports = {registration,login};