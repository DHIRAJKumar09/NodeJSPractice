const jwt =require('jsonwebtoken');

function verifyToken(req,res,next){
    const token = req.headers['Authorization'] || req.headers['authorization'];
    if(!token){
        return res.status(401).json({message:"Access Denied , No token found"});
    }
    console.log(token);
    const auth = token.split(' ')[1];
    console.log(auth);
    try{
        const decode = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decode;
        console.log(req.user);
        console.log(decode);
        next();
    }
    catch(error){
        console.error(error);
    }

   
    
}
module.exports =  verifyToken;