const mongoose = require('mongoose');
const validator = require('validator');

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not an email"
    }
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    minLength: 8,
    trim: true,
    unique: true
  }
});

module.exports = mongoose.model('User', User);