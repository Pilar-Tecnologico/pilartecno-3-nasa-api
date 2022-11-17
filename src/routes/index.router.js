const express = require('express');
const router = express.Router();
const { getIndex } = require('../controllers/index.controller');

function logger(req, res, next){
    console.log(`Date: ${new Date()}`);
    next();
}

/* GET home page. */
router.get('/', logger, getIndex);

module.exports = router;
