const jwt =require('jsonwebtoken');

function verifyToken(req,res,next){
    // console.log("middleware")
    // const token = req.headers['Authorization'];
    // console.log(token);
    next();
  
    // if(!token){
    //     return res.status(401).json({message:'Access denied.No token is found'})
    // }
    // try{
    //     const decode = jwt.verify(token.split(" "),process.env.JWT_SECRET);
    //     req.user = decode;
    //     next();
    // }catch(error){
    //      res.status(400).json({message:'Invalid token .'});
    // }
   

}
module.exports =  verifyToken;