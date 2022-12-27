const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: String,

  password: {
    type: String,
    requires: [true, 'Please enter your pasword'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
});
const User = mongoose.model('User', usersSchema);

module.exports = User;
