import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Palindrome Checker</h1>
        <p>Check if your text reads the same backward as forward</p>
      </div>
    </header>
  );
};

export default Header;