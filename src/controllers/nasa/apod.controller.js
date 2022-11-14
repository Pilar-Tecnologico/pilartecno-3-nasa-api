const axios = require('axios');
const nasaConfig = require('config').get('services.nasa');
const NASA_HOST = nasaConfig.hostname;
const API_KEY = nasaConfig.api_key;
// const API_KEY = 'algoinvalido';

const APOD_PATH = nasaConfig.apod_path;

async function getApod(req, res, next){
    // const {date, start_date, end_date } = req.query;
    const query = new URLSearchParams({
        ...req.query,
        api_key: API_KEY
    });
    const queryString = query.toString();
    console.log(queryString);
    try {
        const response = await axios.get(`${NASA_HOST}${APOD_PATH}?${queryString}`);
        res.json(response.data);

    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports = {
    getApod
}