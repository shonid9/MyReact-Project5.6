import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../@types/type';
import { fetchCards } from '../API/CardApi';


const BusinessHome: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [likedCards, setLikedCards] = useState<string[]>([]);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const cardData = await fetchCards();
        setCards(cardData);
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };
  
    fetchCardData();
  }, []); // Add closing parenthesis here
  
  const handleLikeToggle = (cardId: string) => {
    if (likedCards.includes(cardId)) {
      setLikedCards(likedCards.filter(id => id !== cardId));
    } else {
      setLikedCards([...likedCards, cardId]);
    }
  };
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <nav className="bg-gray-500 dark:bg-gray-900 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold">Logo</Link>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search cards..." 
              className="p-2 rounded-md text-black dark:text-white bg-gray-200 dark:bg-gray-700"
              aria-label="Search cards"
            />
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            <Link to="/liked" className="text-white hover:text-gray-300">Liked Cards</Link>
            <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
            <Link to="/my-cards" className="text-white hover:text-gray-300">My Cards</Link>
           <Link to="/create" className="text-white bg-blue-500 hover:bg-blue-700 text-sm py-2 px-4 rounded">Create a Card</Link>


            <button 
              id="theme-toggle" 
              onClick={toggleTheme} 
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              aria-label="Toggle theme"
            >
              <svg id="theme-toggle-dark-icon" className={`${theme === 'dark' ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" className={`${theme === 'light' ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 mt-20">
        <h1 className="text-4xl font-bold mb-16 text-center">Welcome to Our Card Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cards.map(card => (
            <div key={card.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card.image.url}
                alt={card.image.alt}
                className="w-full h-64 object-cover transition-transform transform hover:scale-105"
              />
              {hoveredId === card.id && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 text-white text-center">
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </div>
              )}
              <div
                className="absolute inset-0 cursor-pointer"
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
              ></div>
              <button 
                onClick={() => handleLikeToggle(card.id)}
                className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow"
              >
                {likedCards.includes(card.id) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.25 4.5l-8.25 8.25-8.25-8.25"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-500 dark:bg-gray-900 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="text-white text-2xl font-bold">Footer Logo</Link>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="p-2 rounded-md text-black dark:text-white bg-gray-200 dark:bg-gray-700"
              aria-label="Search"
            />
            <Link to="/liked" className="text-white hover:text-gray-300">Liked Cards</Link>
            <Link to="/profile" className="text-white hover:text-gray-300">Profile</Link>
            <Link to="/my-cards" className="text-white hover:text-gray-300">My Cards</Link>
          <Link to="/create" className="text-white bg-blue-500 hover:bg-blue-700 text-sm py-2 px-4 rounded">Create a Card</Link>

            <button 
              id="theme-toggle" 
              onClick={toggleTheme} 
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              aria-label="Toggle theme"
            >
              <svg id="theme-toggle-dark-icon" className={`${theme === 'dark' ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" className={`${theme === 'light' ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessHome;
