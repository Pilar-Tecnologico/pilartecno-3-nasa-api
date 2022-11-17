const express = require('express');
const router = express.Router();
const { getApodController } = require('../controllers/nasa/apod.controller');
const { errorHandler } = require('../middlewares/errorHandler.middleware');

/* GET home page. */
router.get('/apod', getApodController, errorHandler);

module.exports = router;
