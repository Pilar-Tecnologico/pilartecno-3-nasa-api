const axios = require('axios');
const nasaConfig = require('config').get('services.nasa');
const NASA_HOST = nasaConfig.hostname;
const API_KEY = nasaConfig.api_key;
const APOD_PATH = nasaConfig.apod_path;

async function getApod(data){
    const query = new URLSearchParams({
        ...data,
        api_key: API_KEY
    });
    const queryString = query.toString();
    // console.log(queryString);
    try {
        const response = await axios.get(`${NASA_HOST}${APOD_PATH}?${queryString}`);
        return response.data;
    } catch(error) {
        const err = new Error();
        Object.assign(err, {
            code: 'forbidden',
            details: error.response.data || error.message,
        })
        throw err; 
    }
}

module.exports = {getApod}