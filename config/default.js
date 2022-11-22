require('dotenv').config();
const {MONGO_USER, MONGO_PASS, API_KEY} = process.env;
module.exports = {
    services: {
        nasa:{
            hostname: 'https://api.nasa.gov',
            apod_path: '/planetary/apod',
            api_key: API_KEY,
        }
    },
    databases: {
        mongodb: {
            connectionString: `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.lkptu.mongodb.net/?retryWrites=true&w=majority`
        }
    }
}