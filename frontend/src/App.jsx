import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import PalindromeChecker from './components/PalindromeChecker';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <PalindromeChecker />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Palindrome Checker App </p>
        <p>Developed By Adesh Mishra</p>
      </footer>
    </div>
  );
}

export default App;