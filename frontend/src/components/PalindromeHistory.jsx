import React from 'react';
import '../styles/PalindromeHistory.css';

const PalindromeHistory = ({ history, loading }) => {
  if (loading && history.length === 0) {
    return (
      <div className="palindrome-history">
        <h2>Recent Palindrome Checks</h2>
        <div className="history-loading">Loading history...</div>
      </div>
    );
  }

  return (
    <div className="palindrome-history">
      <h2>Recent Palindrome Checks</h2>
      
      {history.length === 0 ? (
        <div className="history-empty">No palindrome checks yet</div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div 
              key={item._id} 
              className={`history-item ${item.isPalindrome ? 'is-palindrome' : 'not-palindrome'}`}
            >
              <div className="history-item-content">
                <p className="history-item-text">{item.text}</p>
                <p className="history-item-result">
                  {item.isPalindrome ? 'Palindrome' : 'Not Palindrome'}
                </p>
              </div>
              <p className="history-item-date">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PalindromeHistory;