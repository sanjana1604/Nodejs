const mongoose = require('mongoose');
const Schema=mongoose.Schema;


const campaignSchema = new Schema({
  organized_by:{
    type:String,
    required:true
  },
  c_name:{
    type:String,
    required:true
  },
  detail:{
    type:String,
    required:true
  },
  start_date: {
    type: Date,
    required: true,
    trim: true,
  },
  end_date: {
    type: Date,
    required: true,
    trim: true,
  },

});
const Campaign = mongoose.model('Campaign',campaignSchema);

module.exports=Campaign;