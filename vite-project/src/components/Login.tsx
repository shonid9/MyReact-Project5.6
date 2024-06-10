
//non working code

// import React, { useState } from 'react';
// import { loginUser } from '../API/LoginApi'; // יבוא הפונקציה להתחברות מקובץ ה- API
// import { LoginData } from '../@types/type'; // יבוא סוג הנתונים להתחברות מקובץ ה- types

// // קומפוננטה להתחברות
// const Login: React.FC = () => {
//   // הגדרת state עבור נתוני ההתחברות
//   const [formData, setFormData] = useState<LoginData>({
//     email: '', // אימייל
//     password: '', // סיסמה
//   });
//   const [error, setError] = useState<string>(''); // state עבור הודעת שגיאה

//   // פונקציה שמתבצעת כאשר משתנה מזין משהו בשדה ה- input
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // פונקציה שמתבצעת כאשר המשתמש לוחץ על כפתור ההתחברות
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // מניעת העברת הטופס
//     try {
//       const { token } = await loginUser(formData); // קריאה לפונקצית ה-API להתחברות
//       localStorage.setItem('token', token); // שמירת הטוקן באחסון מקומי
//       // כאן אפשר לבצע הפניה או פעולות נוספות בהתאם לתפקיד המשתמש
//     } catch (error) {
//       const errorMessage = (error as Error).message || 'An error occurred'; // הודעת שגיאה במקרה של כישלון
//       setError(errorMessage); // שמירת הודעת השגיאה ב-state
//     }
//   };

//   // הצגת הקומפוננטה
//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p>{error}</p>} {/* הצגת הודעת השגיאה אם קיימת */}
//       <form onSubmit={handleSubmit}> {/* טופס להתחברות */}
//         <input type="email" name="email" placeholder="Email" autoComplete="username" required onChange={handleChange} /> {/* שדה ה- input לאימייל */}
//         <input type="password" name="password" placeholder="Password" autoComplete="current-password" required onChange={handleChange} /> {/* שדה ה- input לסיסמה */}
//         <button type="submit">Login</button> {/* כפתור ההתחברות */}
//       </form>
//     </div>
//   );
// };

// export default Login; // ייצוא הקומפוננטה







// //working code
// import React, { useState } from 'react';
// import axios from 'axios';
// import decode from 'jwt-decode'; 

// interface LoginProps {
//   onLogin: (token: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
//         email,
//         password,
//       });
//       const token = response.data;
//       localStorage.setItem('token', token);
//       const decodedToken: any = decode(token); // Decoding JWT token

//       // You can extract permissions here
//       console.log('User permissions:', decodedToken);

//       onLogin(token);
//     } catch (error: any) {
//       setError(error.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoComplete="email"
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={7}
//             maxLength={20}
//             autoComplete="current-password"
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };


// export default Login;





// // new code 6/8/24 17:50
// import React, { useState } from 'react';
// import axios from 'axios';
// import decode from 'jwt-decode';

// interface LoginProps {
//   onLogin: (token: string | null, role: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
//         email,
//         password,
//       });
//       const token = response.data;
//       localStorage.setItem('token', token);
//       const decodedToken: any = decode(token);

//       let role = 'user';
//       if (decodedToken.isAdmin) {
//         role = 'admin';
//       } else if (decodedToken.isBusiness) {
//         role = 'business';
//       }

//       onLogin(token, role);
//     } catch (error: any) {
//       setError(error.response?.data?.message || 'Login failed');
//     }
//   };

//   const handleGuest = () => {
//     onLogin(null, 'guest');
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoComplete="email"
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={7}
//             maxLength={20}
//             autoComplete="current-password"
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={handleGuest}>Continue as Guest</button>
//     </div>
//   );
// };

// export default Login;

  
//3
import React, { useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: (token: string | null, role: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
        email,
        password,
      });
      const token = response.data;
      localStorage.setItem('token', token);
      const decodedToken: any = decode(token);

      let role = 'user';
      if (decodedToken.isAdmin) {
        role = 'admin';
      } else if (decodedToken.isBusiness) {
        role = 'business';
      }

      onLogin(token, role);

      // Navigate based on the user's role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'business') {
        navigate('/business');
      } else if (role === 'user') {
        navigate('/User');
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Login failed');
    }
  };

  const handleGuest = () => {
    onLogin(null, 'guest');
    navigate('/guest'); // Navigate to the GuestHome page
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={7}
            maxLength={20}
            autoComplete="current-password"
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Login
        </button>
      </form>
      <button onClick={handleGuest} className="w-full mt-4 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
        Continue as Guest
      </button>
    </div>
  );
};

export default Login;
