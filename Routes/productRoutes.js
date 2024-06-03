
const express = require('express');
const router = express.Router();
const {getallproduct,createproduct,updateProduct,deleteproduct,getproductdetail} = require('../Controller/ProductController')

router.route("/product").get(getallproduct);
router.route("/products/new").post(createproduct);
router.route("/products/:id").put(updateProduct);
router.route("/products/:id").delete(deleteproduct);
router.route("/products/:id").get(getproductdetail);
module.exports = router;