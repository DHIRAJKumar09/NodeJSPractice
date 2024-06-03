const productmodel = require('../Model/productmodel');


exports.createproduct=async(req,res)=>{
    const product = await productmodel.create(req.body);

    res.status(201).json({
        success:true,
        product, 
    })



}
exports.getallproduct = async(req,res)=>{
   
    const products = await productmodel.find();

    res.status(200).json({
        success:true,
        products,
    })
}


exports.updateProduct = async(req,res,next)=>{
    let product = productmodel.findById(req.params.id);

    if(!product){
        return res.status(400).json({
            success:false,
            message:"Product is not found"
        });
    }
    product = await productmodel.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
        success:true,
        product
    })

}
exports.deleteproduct =async(req,res,next)=>{
    const product = await productmodel.findById(req.params.id);
    if(!product){
        return res.status(500).json({success:false,message:"product is not found"});

    }
    const deleteproduct = await productmodel.deleteOne({_id:req.params.id});
    res.status(200).json({
        success:true,
        message:` deleted sucessfully`,
        product,
    })

}

exports.getproductdetail=async(req,res)=>{
    const product = await productmodel.findById(req.params.id);
    try{
        if(!product){
            return res.status(400).json({
                success:false,
                message:"product is not found"
            })
        }
        res.status(200).json({
            success:"true",
            product
        })
    }catch(error){
        console.error("error found",error);
        res.status(400).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}