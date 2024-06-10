import axios from 'axios';
import { Card } from '../@types/type';

export const fetchCards = async (): Promise<Card[]> => {
  try {
    const response = await axios.get<Card[]>('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards');
    return response.data;
  } catch (error) {
    console.error('Error fetching card data:', error);
    return [];
  }
};
