const express = require('express');
const router = express.Router();
const { getTeamsController } = require('../controllers/teams/teams.controller');
const { errorHandler } = require('../middlewares/errorHandler.middleware');

/* GET home page. */
router.get('/', getTeamsController, errorHandler);

module.exports = router;
