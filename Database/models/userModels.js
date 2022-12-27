const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
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
    validate: {
      //This only worls on CREATE AND SAVE
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
});

usersSchema.pre('save', async function(next) {
  //only run this function is the password is modified
  if (!this.isModified('password')) return next();
  //hash the password dwith cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //removed passwordConfirm from the sent object
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
