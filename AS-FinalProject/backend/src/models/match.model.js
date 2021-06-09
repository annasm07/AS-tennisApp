const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  result: [{
    player: [mongoose.Types.ObjectId],
    name: String,
    flow: {
      points: [[{ p1: String, p2: String }]],
      games: [{ p1: String, p2: String }],
      sets: [{ p1: String, p2: String }],
    },
    games: [Number],
    stats: mongoose.Types.ObjectId,
  }],
  winner: [mongoose.Types.ObjectId],
  date: Date,
  duration: Date,
});

module.exports = mongoose.model('Matches', matchSchema);
