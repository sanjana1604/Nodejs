const mongoose = require('mongoose');
const Schema=mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
// const statesArray = ["AN", "AP", "AR", "AS", "BR", "CH", "CT", "DN", "DD", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RZ", "SK", "TN", "TG", "TR", "UP", "UT", "WB"];

const orgSchema=new Schema({
  email:{
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address']
  },
  o_name:{
    type:String,
    validate:{
      validator:(name)=>name.length>=2,
      message:'Name must be longer than or equal to 2 characters.'
    },
    required:[true,'Name is required.']
  },
  regs_no: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  foundation_date: {
    type: Date,
    required: true,
    trim: true,
  },
 
  address: {
    location: String,
    city: String,
    // state: {
    //     type: String,
    //     uppercase: true,
    //     required: true,
    //     enum: statesArray
    // },
    pincode: Number
  },
  org_link:{
    type:String,
    required:true
  },
  image_url:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
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


const Organization=mongoose.model('organization',orgSchema);


module.exports=Organization;



// const getDb= require('../util/database').getDb;

// class Organization{
//   constructor(email, o_name, regs_no, phone, foundation_date, location ,city ,pincode ,org_link ,image_url, description, password) {
//     this.email=email;
//     this.o_name=o_name;
//     this.regs_no=regs_no;
//     this.phone=phone;
//     this.foundation_date=foundation_date;
//     this.location=location;
//     this.city=city;
//     this.pincode=pincode;
//     this.org_link=org_link;
//     this.image_url=image_url;
//     this.description=description;
//     this.password=password;
//   }
//   save(){
//     const db=getDb();
//     return db.collection('organizations')
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//     }
  
//   }

//  module.exports=Organization;