const Organization = require('../models/organization');
const Campaign = require('../models/campaign');
const bcrypt=require('bcryptjs');

exports.getIndex = (req, res, next) => {
  res.render('home/index', {
    pageTitle: 'Home',
    path: '/'
  });
};

exports.getOrgLogin = (req, res, next) => {
  res.render('organization/org-login', {
    pageTitle: 'Organization Login',
    path: '/org-login'
  });
}

exports.getOrgRegistration = (req, res, next) => {
  res.render('organization/org-registration',{
    pageTitle: 'Organization Registration',
    path: '/org-registration'
  })
}

exports.postOrgLogin = (req,res,next) =>{
  const email=req.body.email;
  const password= req.body.password;
  Organization.findOne({email:email})
  .then(orgDoc=>{
    if(orgDoc){
      console.log(orgDoc);
      bcrypt.compare(password, orgDoc.password)
      .then(result =>{
        if(result){
          res.render('organization/org-dashboard', {
            organization: orgDoc,
            pageTitle: 'Organization DashBoard',
            path: '/org-dashboard'
          });
        }
      })
      .catch(
        err=>{
          console.log(err);
          res.redirect('/org-registration');
        }
      )
    }
    else{
      return res.redirect('/org-registration');
    }
  })
  .catch(err=>{
    console.log('err');
  })
}


exports.postOrgRegistration = (req, res, next) =>{
    const email = req.body.email;
    const o_name = req.body.o_name;
    const regs_no = req.body.regs_no;
    const phone = req.body.phone;
    const foundation_date= req.body.foundation_date;
    const location = req.body.location;
    const city= req.body.city;
    const pincode= req.body.pincode;
    const org_link= req.body.org_link;
    const image_url= req.body.image_url;
    const description= req.body.description;
    const password= req.body.password;
  
  Organization.findOne({email:email})
    .then(userDoc => {
      if(userDoc){
        res.redirect('/org-login')
      }
      return bcrypt.hash(password, 12)    
      .then(hashedPassword=>{
        const organization= new Organization({
          email:email, 
          o_name:o_name, 
          regs_no:regs_no, 
          phone:phone,
          foundation_date:foundation_date,
          address:{
            location:location,
            city:city,
            pincode:pincode
          }, 
          org_link:org_link,
          image_url:image_url,
          description:description,
          password:hashedPassword});
        // user
        return organization.save();
      });
    })
      .then(result => {
        // console.log(result);
        console.log('Created Product');
        res.redirect('/org-login');
      })
      .catch(err => {
        console.log(err);
      });
  
 
};

exports.getCampaign=(req, res, next) =>{
  res.render('organization/campaign',{
    pageTitle:'campaign'
  })
 };

 exports.postCampaign = (req, res, next) =>{
  const organized_by= req.body.organized_by;
  const c_name= req.body.c_name;
  const detail= req.body.detail;
  const start_date= req.body.start_date;
  const end_date= req.body.end_date;
    
  const campaign= new Campaign({
        organized_by:organized_by, 
        c_name:c_name, 
        detail:detail, 
        start_date:start_date,
        end_date:end_date,
        });
      // user
    campaign.save()
     .then(result => {
       console.log(result);
      //console.log('Created Product');
      res.redirect('campaign');
    })
    .catch(err => {
      console.log(err.message);
    });

  }

 


// exports.postOrgRegistration = (req, res, next) =>{
//   const email = req.body.email;
//   const o_name = req.body.o_name;
//   const regs_no = req.body.regs_no;
//   const phone = req.body.phone;
//   const foundation_date= req.body.foundation_date;
//   const location = req.body.location;
//   const city= req.body.city;
//   const pincode= req.body.pincode;
//   const org_link= req.body.org_link;
//   const image_url= req.body.image_url;
//   const description= req.body.description;
//   const password= req.body.password;
//   const organization= new Organization(email, o_name, regs_no, phone, foundation_date, location ,city ,pincode ,org_link ,image_url, description, password);
//   organization
//   .save()
//   .then(result => {
//     // console.log(result);
//     console.log('Created Product');
//     res.redirect('/');
//   })
//   .catch(err => {
//     console.log(err);
//   });
// };