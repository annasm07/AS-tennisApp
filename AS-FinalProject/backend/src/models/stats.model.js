const mongoose = require('mongoose');

const statsSchema = mongoose.Schema({
  serve: {
    first: Number,
    second: Number,
    aces: Number,
    doubleFaults: Number,
  },
  points: {
    forcedErrors: {
      baseLine: [Number],
      insideCourt: [Number],
      volley: [Number],
    },
    unforcedErrors: {
      baseLine: [Number],
      insideCourt: [Number],
      volley: [Number],
    },
    winners: {
      baseLine: [Number],
      insideCourt: [Number],
      volley: [Number],
    },
  },
  playerId: String,
});

module.exports = mongoose.model('Stats', statsSchema);
