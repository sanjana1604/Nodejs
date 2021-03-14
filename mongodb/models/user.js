const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
// const statesArray = ["AN", "AP", "AR", "AS", "BR", "CH", "CT", "DN", "DD", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RZ", "SK", "TN", "TG", "TR", "UP", "UT", "WB"];

const userSchema=new Schema({
  email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address']
  },
  u_name:{
    type:String,
    validate:{
      validator:(name)=>name.length>=2,
      message:'Name must be longer than or equal to 2 characters.'
    },
    required:[true,'Name is required.']
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    street: String,
    city: String,
    // state: {
    //     type: String,
    //     uppercase: true,
    //     required: true,
    //     enum: statesArray
    // },
    pincode: Number
  },
  password:{
    type:String,
    required:true
  }
  // complains:[{
  //   type:Schema.Types.ObjectId,
  //   ref:'complain'
  // }]
});
const User=mongoose.model('user',userSchema);

module.exports=User;


// const getDb= require('../util/database').getDb;

// class User{
//   constructor(email, u_name, dob, phone,street, city ,pincode, password) {
//     this.email=email;
//     this.u_name=u_name;
//     this.dob=dob;
//     this.phone=phone;
//     this.street=street;
//     this.city=city;
//     this.pincode=pincode;
//     this.password=password;
//   }
//   save(){
//     const db=getDb();
//     return db.collection('users')
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
//   static findOne(email){
//     const db=getDb();
//     return db.collection('users')
//     .findOne({email$:email})
//     .then(result => {
//       console.log(result);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }
//   // static fetchAll(){
//   //   return db.collection('products').find().toArray().then()
//   // }
// }

// module.exports=User;