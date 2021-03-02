const fs=require('fs');
const path= require('path');

const p=path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports= class cart{
  //we won't use constructor because we don't have to create new cart every time we add a product so we follow a different approach.
  static addProduct(id, productPrice){
    //1. Fetch the all or previous cart
      fs.readFile(p, (err, fileContent) => {
        let cart = {products: [], totalPrice: 0};
        if(!err) {
          //if got an error that means the file didn't exist then.
          cart= JSON.parse(fileContent);
        }
        
        //2. Analyze the cart => find existing product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex]; 
        let updatedProduct;
        // Add new product/ increase quanity
        if(existingProduct){
          updatedProduct={...existingProduct};
          updatedProduct.qty= existingProduct.qty +1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        }
        else{
          updatedProduct = {id: id,qty: 1};
          cart.products = [...cart.products, updatedProduct];
        }
      cart.totalPrice= cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      })
      });
  }
}