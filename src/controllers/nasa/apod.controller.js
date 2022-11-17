const apodService = require('../../services/apod.service');

async function getApodController(req, res, next){
    const data = req.query;
    try {
        const response = await apodService.getApod(data);
        res.json(response);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getApodController
}