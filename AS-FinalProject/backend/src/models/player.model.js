const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: String,
  record: [Number],
  playedMatches: [mongoose.Types.ObjectId],
});

module.exports = mongoose.model('Players', playerSchema);
