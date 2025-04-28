/**
 * Checks if a string is a palindrome
 * Ignores spaces, punctuation, and case sensitivity
 * @param {string} text - Text to check
 * @returns {boolean} - Whether the text is a palindrome
 */
const isPalindrome = (text) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the string reads the same backward as forward
    const reversedText = cleanText.split('').reverse().join('');

    return cleanText === reversedText;
};

module.exports = { isPalindrome };