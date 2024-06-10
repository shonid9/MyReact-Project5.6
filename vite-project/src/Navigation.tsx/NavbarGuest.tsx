import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarGuest: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">Logo</Link>
        
        <div className="flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search cards..." 
            className="p-2 rounded-md text-black dark:text-white"
            aria-label="Search cards"
          />
          <Link to="/about" className="text-white">About</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Sign Up</Link>
          <button 
            onClick={toggleTheme} 
            className="text-white p-2 rounded-md focus:outline-none"
            aria-label="Toggle theme"
          >
            {/* Icon usage removed */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarGuest;
