const path=require('path');
const express = require('express');
const rootDir= require('../util/path');
const adminData= require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  //below render code is when we are using pug the templating engines and we don't have to tell the path because everything is all set in app.js.
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/', 
    hasProducts: products.length > 0,
    activeShop:true,
    ProductCSS:true
  }); 
  //Below code is for normal html pages
  // console.log(adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports=router;