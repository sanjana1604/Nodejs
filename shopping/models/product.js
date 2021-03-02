const path= require('path');
const fs=require('fs');

const p=path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

//below is the helper function and it reads the file
const getProductFromFile = (cb) =>{
  fs.readFile(p,(err, fileContent) => {
    if(err) {
      cb([]);
    }
    else{
    cb(JSON.parse(fileContent));
    }
  });  
}



module.exports = class Product{
  constructor(title, imageURL, price, description){
    //this.title creates a variable title in the class and it is stored in the created object.title after = is the parameter that is this.title and parameter title is not same.
    this.title= title;
    this.imageURL= imageURL;
    this.price= price;
    this.description= description;
  }
  save(){
      this.id= Math.random().toString();
      getProductFromFile(products => {
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err) => {
          console.log(err);
        });
      });
    }
      // fs.readFile(p, (err, fileContent) => {
        //in the below first we are taking a products array and if the file exist then we read the content of the file and store it in products and then we append it by pushing it and saving it in object and then write the overall again back to file.
        // let products=[];
        // if(!err){
        //   products = JSON.parse(fileContent);
        // }
         


    //this will refer to the object created in the class
//    products.push(this);
  
  //we make this utility function static so that we can call it from class not object.
  static fetchAll(cb){
    getProductFromFile(cb);
  }

  static findById(id, cb){
    getProductFromFile(products => {
      const product= products.find(p => p.id===id);
      cb(product);
    })
  }
};