const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const complaintSchema = new Schema({
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
  details:{
    type:String,
    required:true
  }

});

const Complaint=mongoose.model('complaint',complaintSchema);

module.exports=Complaint;
