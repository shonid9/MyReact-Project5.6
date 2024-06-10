// ToggleButton.tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ToggleButton;
