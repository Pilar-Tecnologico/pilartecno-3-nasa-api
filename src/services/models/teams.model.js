const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  mainPlayer: String,
  coach: String,
  players: [String]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = {Team};