import React from 'react';
import '../styles/PalindromeResult.css';

const PalindromeResult = ({ text, isPalindrome }) => {
  return (
    <div className={`palindrome-result ${isPalindrome ? 'is-palindrome' : 'not-palindrome'}`}>
      <h3>Result:</h3>
      <div className="result-content">
        <p className="result-text">"{text}"</p>
        <p className="result-verdict">
          {isPalindrome ? 'is a palindrome!' : 'is not a palindrome.'}
        </p>
      </div>
    </div>
  );
};

export default PalindromeResult;