// RegisterApi.ts

import axios from 'axios';
import { RegisterData, RegisterResponse } from '../@types/type';

const baseURL = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users';

export const registerUser = async (userData: RegisterData): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(baseURL, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      throw new Error(errorMessage);
    } else {
      throw new Error('An error occurred');
    }
  }
};
