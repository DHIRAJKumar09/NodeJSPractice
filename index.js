const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const dotenv = require('dotenv');
const verifyToken = require('../Server/Middleware/Auth')

const productrouter = require('./Routes/productRoutes')
const router = require('../Server/Routes/useroutes');
const app = express();
app.use(cors());
app.use(express.json());


dotenv.config({path:"config.env"});
mongoose.connect('mongodb://127.0.0.1:27017/Curd')
.then(()=>{
    console.log("Database is connected");
})
.catch((error)=>{
    console.log(error);
})

app.use("/curd/v1/",router);
app.use("/curd/v1",productrouter);

//Error Handling


const PORT = process.env.PORT || 7000
app.listen(PORT,()=>{
    console.log(`Server is working ${PORT}`);
})