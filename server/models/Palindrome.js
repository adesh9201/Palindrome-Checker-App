const mongoose = require('mongoose');

const palindromeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  isPalindrome: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Palindrome = mongoose.model('Palindrome', palindromeSchema);

module.exports = Palindrome;