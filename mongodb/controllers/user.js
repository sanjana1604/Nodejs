const bcrypt=require('bcryptjs');

const User= require('../models/user');
const Complaint= require('../models/complaint');
const Campaign= require('../models/campaign');

exports.getIndex = (req, res, next) => {
  res.render('home/index', {
    //prods: products,
    pageTitle: 'Home',
    path: '/'
  });
};

exports.getUserLogin = (req, res, next) => {
  res.render('user/user-login', {
    pageTitle: 'User Login',
    path: '/user-login'
  });
}



exports.postUserLogin = (req,res,next) =>{
  const email=req.body.email;
  const password= req.body.password;
  User.findOne({email:email})
  .then(userDoc=>{
    if(userDoc){
      bcrypt.compare(password, userDoc.password)
      .then(result =>{
        if(result){
          res.render('user/user-dashboard', {
            user: userDoc,
            pageTitle: 'DashBoard',
            path: '/user-login/user-dashboard'
          });
        }
      })
      .catch(
        err=>{
          console.log(err);
          res.redirect('/user-registration');
        }
      )
    }
    else{
      return res.redirect('/user-registration');
    }
  })
  .catch(err=>{
    console.log('err');
  })
}

exports.getUserRegistration = (req, res, next) => {
  res.render('user/user-registration',{
    pageTitle: 'User Registration',
    path: '/user-registration'
  })
}

exports.postUserRegistration = (req, res, next) =>{
  const email = req.body.email;
  const u_name = req.body.u_name;
  const dob = req.body.dob;
  const phone = req.body.phone;
  const street= req.body.street;
  const city= req.body.city;
  const pincode= req.body.pincode;
  const password= req.body.password;
  
  User.findOne({email:email})
    .then(userDoc => {
      if(userDoc){
        res.redirect('/user-login')
      }
      return bcrypt.hash(password, 12)    
      .then(hashedPassword=>{
        const user= new User({
          email:email, 
          u_name:u_name, 
          dob:dob, 
          phone:phone,
          address:{
            street:street,
            city:city,
            pincode:pincode
          }, 
          password:hashedPassword});
        // user
        return user.save();
      });
    })
      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/');
      })
      .catch(err => {
        console.log(err);
      });
  
 
};

exports.getUserComplaint=(req, res, next) =>{
 res.render('user/complaint',{
   pageTitle:'complaint'
 })
};

exports.postComplaintList=(req, res, next) => {
  const details=req.body.complaint;
  const street=req.body.street;
  const city=req.body.city;
  const pincode=req.body.pincode;
  const complaint=new Complaint({
    details:details,
    address:{
      street:street,
      city: city,
      pincode:pincode  
    }
  });
  complaint.save()
  .then(complaint=>{ 
    res.redirect('complaint');
  })
  .catch(err=>{
    console.log(err.message)
  }) 
}

exports.getUserDashboard=(req, res, next) =>{
  res.render('user/user-dashboard',{
    pageTitle:'DashBoard',
    path:'/user-login/user-dashboard'
  });
};

exports.getUserProfile=(req,res,next) => {
  User.findById(req.params.userId)
  .then(result=>{
    res.render('user/profile',{
      user:result,
      pageTitle:'Profile',
      path:'/user-login/profile'  
    });
  })
  .catch(err=>{
    console.log(err.message);
  });
}

exports.getCampaign=(req, res, next) =>{
  const userId=req.params.body;
  Campaign.find({})
    .then(result => {
      res.render('organization/campaign-list',{
        campaigns:result,
        userId:userId,
        pageTitle:'Campaign',
        path:'/user-login/campaign-list'
      })
    })
    .catch(err => {
      console.log(err.message);
    })

}