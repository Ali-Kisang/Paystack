// routes/subscriptionRoutes.js
const express = require('express');
const router = express.Router();
const { initiateSubscription, verifySubscription } = require('../controllers/subscriptionController');

router.post('/initiate', initiateSubscription);
router.post('/verify', verifySubscription);

module.exports = router;
