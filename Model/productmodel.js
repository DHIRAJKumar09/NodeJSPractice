const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,"Please Enter product name"],
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"],
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"price cannot exceed 8 character"],
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,

        }
    },
    category:{
        type:String,
        required:[true,"Please Enter Proudct "],

    },
    stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Not exceed than 4 character"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,

    },
    reviews:[
        {
            name:{
                type:String,
                required:true,

            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model('product',productSchema);