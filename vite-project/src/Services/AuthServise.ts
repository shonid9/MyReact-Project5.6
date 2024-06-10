import axios from 'axios';

class AuthService {
  private static readonly BASE_URL = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

  static async register(data: {
    name: { first: string, middle?: string, last: string },
    phone: string,
    email: string,
    password: string,
    image?: { url: string, alt?: string },
    address: { state: string, country: string, city: string, street: string, houseNumber: number, zip: number },
    isBusiness: boolean,
  }) {
    try {
      // Validate input data for registration
      if (!data.name.first || data.name.first.length < 2 || data.name.first.length > 256) {
        throw new Error('First name is required and must be between 2 and 256 characters.');
      }
      
      if (!data.name.last || data.name.last.length < 2 || data.name.last.length > 256) {
        throw new Error('Last name is required and must be between 2 and 256 characters.');
      }
      
      // Validate phone number
      const phoneRegex = /^\d{9,11}$/;
      if (!phoneRegex.test(data.phone)) {
        throw new Error('Invalid phone number format.');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format.');
      }

      // Validate password format
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,20}$/;
      if (!passwordRegex.test(data.password)) {
        throw new Error('Password must be between 7 and 20 characters and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
      }

      // Make a POST request to the register endpoint with the provided data
      const response = await axios.post(`${this.BASE_URL}`, data);

      // Return the response data
      return response.data;
    } catch (error) {
      // If an error occurs during the registration process, throw an error with a custom message
      throw new Error('Registration failed. Please check your inputs and try again.');
    }
  }

  static async login(email: string, password: string) {
    try {
      // Validate email and password
      if (!email || !password) {
        throw new Error('Email and password are required.');
      }

      // Make a POST request to the login endpoint with the provided email and password
      const response = await axios.post(`${this.BASE_URL}/login`, { email, password });

      // Return the response data
      return response.data;
    } catch (error) {
      // If an error occurs during the login process, throw an error with a custom message
      throw new Error('Login failed. Please check your email and password.');
    }
  }

  static saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static logout() {
    localStorage.removeItem('token');
  }
}

export default AuthService;
