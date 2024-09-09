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
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQHsvkDJv8uaXQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700684772171?e=1731542400&v=beta&t=8TXt4hihSniu-XAAADDfT47lO4ri1gn4kF7QIHIObTw" alt="Profile" className="profile-picture" />
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