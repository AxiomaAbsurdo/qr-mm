import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import './App.css';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeSwitcher;