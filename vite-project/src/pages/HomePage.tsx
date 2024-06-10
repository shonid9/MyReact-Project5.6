// import React, { useEffect, useState } from 'react';
// import NavbarGuest from '../Navigation.tsx/NavbarGuest'; // Import the guest navbar component
// import { Card } from '../@types/type'; 
// import { fetchCards } from '../API/CardApi';

// const Home: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCardData = async () => {
//       try {
//         const cardData = await fetchCards();
//         setCards(cardData);
//       } catch (error) {
//         console.error('Error fetching card data:', error);
//       }
//     };

//     fetchCardData();
//   }, []);

//   return (
//     <div>
//       <NavbarGuest /> {/* Place the guest navbar here */}
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-4">Cards</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {cards.map(card => (
//             <div key={card.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={card.image.url}
//                 alt={card.image.alt}
//                 className="w-full h-64 object-cover transition-transform transform hover:scale-105"
//               />
//               {hoveredId === card.id && (
//                 <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 text-white text-center">
//                   <h2 className="text-xl font-semibold">{card.title}</h2>
//                 </div>
//               )}
//               <div
//                 className="absolute inset-0 cursor-pointer"
//                 onMouseEnter={() => setHoveredId(card.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;



// //2
// import React, { useEffect, useState } from 'react';
// import NavbarGuest from '../Navigation.tsx/NavbarGuest'; // Import the guest navbar component
// import { Card } from '../@types/type'; 
// import { fetchCards } from '../API/CardApi';

// const HomePage: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchCardData = async () => {
//       try {
//         const cardData = await fetchCards();
//         setCards(cardData);
//       } catch (error) {
//         console.error('Error fetching card data:', error);
//       }
//     };

//     fetchCardData();
//   }, []);

//   return (
//     <div>
//       <NavbarGuest /> {/* Place the guest navbar here */}
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-4">Cards</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//           {cards.map(card => (
//             <div key={card.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={card.image.url}
//                 alt={card.image.alt}
//                 className="w-full h-64 object-cover transition-transform transform hover:scale-105"
//               />
//               {hoveredId === card.id && (
//                 <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 text-white text-center">
//                   <h2 className="text-xl font-semibold">{card.title}</h2>
//                 </div>
//               )}
//               <div
//                 className="absolute inset-0 cursor-pointer"
//                 onMouseEnter={() => setHoveredId(card.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;










// //4

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Card } from '../@types/type';
// import { fetchCards } from '../API/CardApi';

// const HomePage: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [theme, setTheme] = useState<string>('light');

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//       document.documentElement.classList.add('dark');
//     } else {
//       setTheme('light');
//       document.documentElement.classList.remove('dark');
//     }
//   };

//   useEffect(() => {
//     const fetchCardData = async () => {
//       try {
//         const cardData = await fetchCards();
//         setCards(cardData);
//       } catch (error) {
//         console.error('Error fetching card data:', error);
//       }
//     };

//     fetchCardData();
//   }, []);

//   return (
//     <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
//       <nav className="bg-gray-500 dark:bg-gray-900 p-4">
//         <div className="container mx-auto flex flex-wrap items-center justify-between">
//           <Link to="/" className="text-white text-2xl font-bold">Logo</Link>
          
//           <div className="flex items-center space-x-4">
//             <input 
//               type="text" 
//               placeholder="Search cards..." 
//               className="p-2 rounded-md text-black dark:text-white bg-gray-200 dark:bg-gray-700"
//               aria-label="Search cards"
//             />
//             <Link to="/about" className="text-white hover:text-gray-300">About</Link>
//             <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
//             <Link to="/register" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md">Sign Up</Link>
//             <button 
//               onClick={toggleTheme} 
//               className="text-white p-2 rounded-md focus:outline-none"
//               aria-label="Toggle theme"
//             >
//               {theme === 'light' ? 'Dark' : 'Light'} Mode
//             </button>
//           </div>
//         </div>
//       </nav>

//       <div className="container mx-auto px-4 mt-8">
//         <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Card Collection</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {cards.map(card => (
//             <div key={card.id} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
//               <img
//                 src={card.image.url}
//                 alt={card.image.alt}
//                 className="w-full h-64 object-cover transition-transform transform hover:scale-105"
//               />
//               {hoveredId === card.id && (
//                 <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 text-white text-center">
//                   <h2 className="text-xl font-semibold">{card.title}</h2>
//                 </div>
//               )}
//               <div
//                 className="absolute inset-0 cursor-pointer"
//                 onMouseEnter={() => setHoveredId(card.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;







// //5 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../@types/type';
import { fetchCards } from '../API/CardApi';

const HomePage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
 const [isNavbarTransparent, setIsNavbarTransparent] = useState<boolean>(false);
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
      // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);

        window.scrollTo(0, 0);

    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('color-theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

const handleScroll = () => {
    // Check if the page has been scrolled beyond a certain point
    if (window.scrollY > 50) {
      setIsNavbarTransparent(false); // Make the navbar non-transparent
    } else {
      setIsNavbarTransparent(true); // Make the navbar transparent
    }
  };

 




  return (
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''} ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
      <nav className={`p-4 fixed top-0 w-full z-10 transition duration-500 ease-in-out ${isNavbarTransparent ? 'bg-gray-800 dark:bg-gray-900' : 'bg-transparent'}`}>
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
      <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
      <Link to="/register" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md">Sign Up</Link>
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

      <div className="container mx-auto px-4 mt-40">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Card Collection</h1>
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
              />
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
      <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
      <Link to="/register" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md">Sign Up</Link>
       <button 
              id="theme-toggle" 
              onClick={toggleTheme} 
              className="text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 rounded-lg text-sm p-2.5"
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

export default HomePage;





