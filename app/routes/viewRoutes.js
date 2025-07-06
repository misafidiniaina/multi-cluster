const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');

router.get('/', viewController.homePage);
router.get('/healthz', viewController.healthCheck);

module.exports = router;
