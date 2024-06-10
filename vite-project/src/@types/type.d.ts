// types.ts

// LoginData type for login form data
export interface LoginData {
  email: string;
  password: string;
}

// LoginResponse type for login API response
export interface LoginResponse {
  token: string;
}

// RegisterData type for register form data

export interface RegisterResponse {
  name: {
    first: string;
    middle: string;
    last: string;
    _id: string;
  };
  email: string;
  _id: string;
}
  
export interface RegisterData {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
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
    zip: number;
  };
  isBusiness: boolean;
}



interface Card {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  image: {
    url: string;
    alt: string;
    _id: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
    _id: string;
  };
  bizNumber: number;
  likes: any[]; // Assuming this can be of any type
  user_id: string;
  createdAt: string;
  __v: number;
}


export interface DecodedToken {
  _id: string;
  isBusiness: boolean;
  isAdmin: boolean;
  // Add any other properties from your decoded token as needed
}

// types.d.ts

// Define the types for the form data
interface FormData {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web: string;
  imageUrl: string;
  imageAlt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number; // Assuming zip code is a string based on the provided example
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
    zip: number; // Assuming zip code is a string based on the provided example
  };
}


export interface CardResponse {
  title: string;
  subtitle: string;
  description: string;
  phone: string; // Adjust the type as per the required format
  email: string; // Adjust the type as per the required format
  web: string;
  image: {
    url: string;
    alt: string;
    _id: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number; // Adjust the type to string
    _id: string;
  };
  bizNumber: number;
  likes: any[]; // Adjust to a more specific type if possible
  user_id: string;
  _id: string;
  createdAt: string;
  __v: number;
}
