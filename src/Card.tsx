import React from 'react';
import { useTheme } from './ThemeContext';
import { px } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const { theme } = useTheme();

  const cardStyle: React.CSSProperties = {
    maxWidth: 345,
    padding: 16,
    margin: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    color: theme === 'light' ? '#222222' : '#ffffff',
    border: `${theme === 'light' ? '#808080' : '#ffffff'}`,
    borderRadius: 8,
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
  };

  return <div style={cardStyle}>{children}</div>;
};
export default Card;
