
const express = require('express');
const router = express.Router();
const verifyToken = require("../Middleware/Auth")
const {getallproduct,createproduct,updateProduct,deleteproduct,getproductdetail, searchResult} = require('../Controller/ProductController')

router.route("/product").get(verifyToken,getallproduct);
router.route("/products/new").post(createproduct);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteproduct);
router.route("/products/:id").get(getproductdetail);
router.route("/search/:key").get(searchResult);
module.exports = router;
