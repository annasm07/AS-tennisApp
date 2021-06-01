const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
  player1: {
    type: mongoose.Types.ObjectId,
    ref: 'Players',
  },
  player2: {
    type: mongoose.Types.ObjectId,
    ref: 'Players',
  },
  result: {
    firstSet: [Number],
    secondSet: [Number],
    thirdSet: [Number],
  },
  winner: Boolean,
  date: Date,
  stats: [String],
  duration: String,
});

module.exports = mongoose.model('Matches', matchSchema);
