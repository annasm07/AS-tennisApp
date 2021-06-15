const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  result: [{
    player: [mongoose.Types.ObjectId],
    name: String,
    games: [Number],
    stats: mongoose.Types.ObjectId,
  }],
  flow: {
    points: [[{ p1: String, p2: String }]],
    games: [[{ p1: String, p2: String }]],
    sets: [[{ p1: String, p2: String }]],
  },
  winner: [mongoose.Types.ObjectId],
  date: Date,
  duration: Date,
});

module.exports = mongoose.model('Matches', matchSchema);
