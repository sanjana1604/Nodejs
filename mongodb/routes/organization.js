const path = require('path');

const express = require('express');

const orgController = require('../controllers/organization');

const router = express.Router();

router.get('/', orgController.getIndex);

router.get('/org-login',orgController.getOrgLogin);

router.post('/org-login',orgController.postOrgLogin);

router.get('/org-registration',orgController.getOrgRegistration);

router.post('/org-registration', orgController.postOrgRegistration);

router.get('/org-login/campaign', orgController.getCampaign);

router.post('/org-login/campaign', orgController.postCampaign);

module.exports = router;