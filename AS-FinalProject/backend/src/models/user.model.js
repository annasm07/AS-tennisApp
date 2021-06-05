const mongoose = require('mongoose');
const md5 = require('md5');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  player: Boolean,
  playerName: String,
  playerId: mongoose.Types.ObjectId,
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return md5(password) === this.password;
};

module.exports = mongoose.model('Users', userSchema);
