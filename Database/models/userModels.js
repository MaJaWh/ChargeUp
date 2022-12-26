const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
  },
  password: {
    type: String,
    requires: [true, 'Please enter your pasword'],
  },
});
const User = mongoose.model('User', usersSchema);

module.exports = User;
