import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">DevFinder</div>
      <button onClick={toggleTheme} className="theme-button">
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} size="lg" />
      </button>
    </header>
  );
};

export default Header;
