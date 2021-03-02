const path=require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

//if we have some routes like below there are three routes starting from same routes name that is /products and if any one is dyanmic routes then it mush be at last because any similar routes after that will be consider as a dynamic route and it will not execute that's why /products/:productsId will be at last.

router.get('/products', shopController.getProducts);

//router.get('/products/delete');

router.get('/products/:productId', shopController.getProduct);

router.get('/cart',shopController.getCart);

router.post('/cart',shopController.postCart);

router.get('/orders',shopController.getOrders);

router.get('/checkout',shopController.getCheckout);

module.exports=router;