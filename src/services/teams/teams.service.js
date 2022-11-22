const {Team} = require('../models/teams.model');

async function getTeams(){
    try {
        const teams = await Team.find({});
        return teams;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getTeams
}