// // tailwind.config.js

// module.exports = {
//   // Other Tailwind CSS configuration options...

//   // Specify the content sources for Tailwind CSS
//   content: [
//     // Add your content sources here
//     './src/**/*.html',
//     './src/**/*.js',
    
//     // Add more content sources as needed
//   ],
// };
// tailwind.config.js
// tailwind.config.js



module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
