const express = require('express');
const router = express.Router();
const {
    checkPalindrome,
    getPalindromeHistory,
    getPalindromeById
} = require('../controllers/palindromeController');

// Route: /api/palindromes
router.post('/', checkPalindrome);
router.get('/', getPalindromeHistory);

// Route: /api/palindromes/:id
router.get('/:id', getPalindromeById);

module.exports = router;