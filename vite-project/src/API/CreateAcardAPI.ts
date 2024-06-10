import axios from 'axios';

export interface CardData {
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip?: number; // Adjusted to match the table
  };
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
}

export const createCard = async (data: CardData, token: string) => {
  try {
    const response = await axios.post('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards', data, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create card');
  }
};
