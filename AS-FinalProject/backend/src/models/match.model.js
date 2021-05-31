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
  winner: Boolean,
  result: {
    firstSet: [Number],
    secondSet: [Number],
    thirdSet: [Number],
  },
  date: Date,

});

module.exports = mongoose.model('Matches', matchSchema);
