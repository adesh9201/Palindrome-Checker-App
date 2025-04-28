import React, { useState } from 'react';
import '../styles/PalindromeForm.css';

const PalindromeForm = ({ onSubmit, loading }) => {
  const [text, setText] = useState('');
  const [localError, setLocalError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!text.trim()) {
      setLocalError('Please enter some text');
      return;
    }
    
    setLocalError('');
    onSubmit(text);
    setText(''); // Clear input after submission
  };

  return (
    <div className="palindrome-form-container">
      <h2>Check Your Text</h2>
      <form className="palindrome-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to check..."
            disabled={loading}
            className="form-input"
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="form-button"
          >
            {loading ? 'Checking...' : 'Check'}
          </button>
        </div>
        {localError && <div className="form-error">{localError}</div>}
      </form>
    </div>
  );
};

export default PalindromeForm;