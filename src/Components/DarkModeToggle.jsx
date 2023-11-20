// DarkModeToggle.jsx
import React from 'react';

const DarkModeToggle = ({ darkMode, onClick }) => {
  return (
    <button className={`dark-mode-toggle-button ${darkMode ? 'dark' : 'light'}`} onClick={onClick}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
