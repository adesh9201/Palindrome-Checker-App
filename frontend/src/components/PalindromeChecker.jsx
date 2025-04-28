import React, { useState, useEffect } from 'react';
import PalindromeForm from './PalindromeForm';
import PalindromeResult from './PalindromeResult';
import PalindromeHistory from './PalindromeHistory';
import { checkPalindrome, getPalindromeHistory } from '../services/api';
import '../styles/PalindromeChecker.css';

const PalindromeChecker = () => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch palindrome history on component mount
  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const data = await getPalindromeHistory();
      setHistory(data);
      setError(null);
    } catch (err) {
      setError('Failed to load palindrome history');
      console.error('Error fetching history:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckPalindrome = async (text) => {
    try {
      setLoading(true);
      setError(null);
      const data = await checkPalindrome(text);
      setResult(data);
      // Refresh history after successful check
      fetchHistory();
    } catch (err) {
      setError('Failed to check palindrome');
      console.error('Error checking palindrome:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="palindrome-checker">
      <PalindromeForm 
        onSubmit={handleCheckPalindrome} 
        loading={loading} 
      />
      
      {error && <div className="error-message">{error}</div>}
      
      {result && (
        <PalindromeResult 
          text={result.text} 
          isPalindrome={result.isPalindrome} 
        />
      )}
      
      <PalindromeHistory 
        history={history} 
        loading={loading} 
      />
    </div>
  );
};

export default PalindromeChecker;