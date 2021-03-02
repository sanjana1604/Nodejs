const path= require('path');

const express= require('express');

const rootDir= require('../util/path');

const router= express.Router();//this is like a mini express

const products = [];

// /admin/add-roduct => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct:true})
  //res.sendFile(path.join( rootDir, 'views', 'add-product.html'));
});

//We can change the below url name from /product to the above url name but still it will be different because the upper one is get request and the lower one is post request. 
//router.post('/product',(req, res, next) => {

router.post('/add-product',(req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;