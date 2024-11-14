import React from 'react';
import Card from './Card';
import ThemeSwitcher from './ThemeSwitcher';
import { LinkHub } from './Dock';
import { ThemeProvider, useTheme } from './ThemeContext';
import './App.css';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Card>
        <div className="card-content">
          <div className="card-top-right">
            <ThemeSwitcher />
          </div>
          <img src="https://lh3.googleusercontent.com/a/ACg8ocIc9COsif6MnKcjDT6dIQki94kgI7auRK3aiZbKCFNJja2ljr0g=s288-c-no" alt="Profile" className="profile-picture" />
          <h1>Matias Mortara</h1>
          <h2>Software Solution Architect Cybersecurity Specialist</h2>
          <LinkHub />
        </div>
      </Card>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;