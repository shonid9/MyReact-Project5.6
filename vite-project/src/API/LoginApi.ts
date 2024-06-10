import { LoginData } from '../@types/type';
import jwtDecode from 'jwt-decode';

// Function to log in a user with the given user data

export async function loginUser(userData: LoginData): Promise<void> {
  try {
    const response = await fetch('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData), // Converting the user data to JSON format
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Login failed with status ${response.status}: ${errorText}`);
    }

    const { token } = await response.json();
    localStorage.setItem('token', token); // Save token to local storage

    // Decode the token to extract additional user information
    const decodedToken = jwtDecode(token);

    // Extract relevant information from the decoded token
    const { _id, isBusiness, isAdmin } = decodedToken;

    // Log the extracted user information
    console.log('_id:', _id);
    console.log('isBusiness:', isBusiness);
    console.log('isAdmin:', isAdmin);

  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('An unexpected error occurred during login. Please try again later.');
  }
}
