const path= require('path');

const express= require('express');

const adminController = require('../controllers/admin');

const router= express.Router();//this is like a mini express


// /admin/add-roduct => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-roduct => GET
router.get('/products', adminController.getProducts);

//We can change the below url name from /product to the above url name but still it will be different because the upper one is get request and the lower one is post request. 
//router.post('/product',(req, res, next) => {
router.post('/add-product', adminController.postAddProduct );

router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports=router;