const mongoose = require('mongoose');

const note = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  body: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  length: {
    type: Number
  },
  createdAt: {
    type: String
  }
});

module.exports = mongoose.model('note', note)
