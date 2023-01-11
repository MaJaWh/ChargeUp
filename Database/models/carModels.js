const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  model: {
    type: String,
    required: [true, 'Please enter an email'],
  },
  photo: String,

  plugType: {
    type: String,
    requires: [true, 'Please enter your pasword'],
  },
  powerRating: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
  maxDistance: {
    type: String,
    required: [true, 'Please confirm your password'],
  },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
