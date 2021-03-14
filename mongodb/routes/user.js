const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

 router.get('/', userController.getIndex);

 router.get('/user-login',userController.getUserLogin);

 router.get('/user-registration',userController.getUserRegistration);

 router.post('/user-registration', userController.postUserRegistration);

 router.post('/user-login',userController.postUserLogin);

 router.get('/user-login/complaint',userController.getUserComplaint);

router.post('/user-login/complaint-list', userController.postComplaintList);

router.get('/user-login/user-dashboard',userController.getUserDashboard);

router.get('/user-login/:userId',userController.getUserProfile);

router.get('/user-login/campaign/:userId',userController.getCampaign);


module.exports = router;