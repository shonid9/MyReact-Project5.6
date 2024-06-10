// // App.tsx
// import React from 'react';
// import Login from './components/Login';
// const App: React.FC = () => {
//   return (

//     <Login />

  
//   );
// };

// export default App;
  


// //6/9/24 11:33
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';

// import AdminHome from './pages/AdminHome';
// import UserHome from './pages/UserHome';
// import BusinessHome from './pages/BusinessHome';
// import GuestHome from './pages/GuestHome';

// const App: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [role, setRole] = useState<string | null>(null);

//   const handleLogin = (token: string | null, role: string) => {
//     setToken(token);
//     setRole(role);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={!token ? <Login onLogin={handleLogin} /> : <Navigate to={`/${role}`} />} />
//         <Route path="/admin" element={role === 'admin' ? <AdminHome /> : <Navigate to="/" />} />
//         <Route path="/business" element={role === 'business' ? <BusinessHome /> : <Navigate to="/" />} />
//         <Route path="/user" element={role === 'user' ? <UserHome /> : <Navigate to="/" />} />
//         <Route path="/guest" element={role === 'guest' ? <GuestHome /> : <Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

//3
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login';
// import AdminHome from './pages/AdminHome';
// import UserHome from './pages/UserHome';
// import BusinessHome from './pages/BusinessHome';
// import HomePage from './pages/HomePage';
// import LikedCardsPage from './pages/LikedCardsPage';



// const App: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [role, setRole] = useState<string | null>(null);

//   const handleLogin = (token: string | null, role: string) => {
//     setToken(token);
//     setRole(role);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={!token ? <HomePage /> : <Navigate to="/" />} />
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/admin" element={role === 'admin' ? <AdminHome /> : <Navigate to="/" />} />
//         <Route path="/business" element={role === 'business' ? <BusinessHome /> : <Navigate to="/" />} />
//         <Route path="/user" element={role === 'user' ? <UserHome /> : <Navigate to="/" />} />
//         <Route path="/guest" element={role === 'guest' ? <HomePage /> : <Navigate to="/" />} />
//         <Route path="/liked" element={<LikedCardsPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





//4
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import BusinessHome from './pages/BusinessHome';
import CreateCard from './pages/CreateCard';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (token: string | null) => {
    setToken(token);
  };

  return (
   <Router>
  <Routes>
    <Route path="/" element={!token ? <Navigate to="/login" /> : <BusinessHome />} />
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
    <Route path="/create" element={<CreateCard token={token} />} />
    <Route path="/business" element={<BusinessHome />} />
  </Routes>
</Router>

  );
};

export default App;
