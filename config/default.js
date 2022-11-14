require('dotenv').config();
module.exports = {
    services: {
        nasa:{
            hostname: 'https://api.nasa.gov',
            apod_path: '/planetary/apod',
            api_key: process.env.API_KEY,
        }
    }
}