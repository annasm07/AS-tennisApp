const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: String,
  record: [Number],
  playedMatches: [{
    type: mongoose.Types.ObjectId,
    ref: 'Matches',
  }],
});

module.exports = mongoose.model('Players', playerSchema);
