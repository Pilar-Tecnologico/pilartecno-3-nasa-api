const express = require('express');
const router = express.Router();
const { getApod } = require('../controllers/nasa/apod.controller');

/* GET home page. */
router.get('/apod', getApod);

module.exports = router;
