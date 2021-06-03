const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  result: [{
    player: [mongoose.Types.ObjectId],
    name: String,
    games: [Number],
    stats: mongoose.Types.ObjectId,
  }],
  winner: [mongoose.Types.ObjectId],
  date: Date,
  duration: Date,
});

module.exports = mongoose.model('Matches', matchSchema);
