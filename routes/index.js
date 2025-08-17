const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');

router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/location', mainController.location);
router.get('/location/review', mainController.review);

module.exports = router;
