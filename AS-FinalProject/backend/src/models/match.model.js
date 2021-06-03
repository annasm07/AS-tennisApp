const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  result: [{
    player: [mongoose.Types.ObjectId],
    games: [Number],
  }],
  winner: [mongoose.Types.ObjectId],
  date: Date,
  stats: [mongoose.Types.ObjectId],
  duration: Date,
});

module.exports = mongoose.model('Matches', matchSchema);
