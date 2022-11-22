const TeamsService = require('../../services/teams/teams.service');


async function getTeamsController(req, res, next){
    try {
        const teams = await TeamsService.getTeams();
        res.json(teams);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getTeamsController
}