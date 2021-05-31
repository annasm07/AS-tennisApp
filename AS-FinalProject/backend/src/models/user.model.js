const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  name: String,
  player: Boolean,
  playerName: String,

});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = mongoose.model('Users', userSchema);
