const Palindrome = require('../models/Palindrome');
const { isPalindrome } = require('../utils/palindromeChecker');

// @desc    Check if text is a palindrome and save to database
// @route   POST /api/palindromes
// @access  Public
const checkPalindrome = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }

        const palindromeResult = isPalindrome(text);

        // Create new palindrome entry
        const newPalindrome = await Palindrome.create({
            text,
            isPalindrome: palindromeResult
        });

        res.status(201).json({
            _id: newPalindrome._id,
            text: newPalindrome.text,
            isPalindrome: newPalindrome.isPalindrome,
            createdAt: newPalindrome.createdAt
        });
    } catch (error) {
        console.error('Error checking palindrome:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get palindrome check history
// @route   GET /api/palindromes
// @access  Public
const getPalindromeHistory = async (req, res) => {
    try {
        const palindromes = await Palindrome.find()
            .sort({ createdAt: -1 })
            .limit(10);

        res.status(200).json(palindromes);
    } catch (error) {
        console.error('Error getting palindrome history:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get palindrome by ID
// @route   GET /api/palindromes/:id
// @access  Public
const getPalindromeById = async (req, res) => {
    try {
        const palindrome = await Palindrome.findById(req.params.id);

        if (!palindrome) {
            return res.status(404).json({ message: 'Palindrome not found' });
        }

        res.status(200).json(palindrome);
    } catch (error) {
        console.error('Error getting palindrome by ID:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    checkPalindrome,
    getPalindromeHistory,
    getPalindromeById
};