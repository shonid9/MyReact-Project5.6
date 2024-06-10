// Register.tsx

import React, { useState } from 'react';
import { registerUser } from '../API/RegisterApi';
import { RegisterData } from '../@types/type';

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    name: { first: '', middle: '', last: '' },
    phone: '',
    email: '',
    password: '',
    image: { url: '', alt: '' },
    address: { state: '', country: '', city: '', street: '', houseNumber: 0, zip: 0 },
    isBusiness: false,
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Split name by period to handle nested fields
    const keys = name.split('.');
    if (keys.length > 1) {
      const [parent, child] = keys;
      setFormData(prevState => ({
        ...prevState,
        [parent]: {
          ...(prevState as any)[parent], // TypeScript assertion to allow dynamic key
          [child]: value,
        },
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('Registration successful:', response);
    } catch (error) {
      const errorMessage = (error as Error).message || 'An error occurred';
      setError(errorMessage);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name.first" placeholder="First Name" value={formData.name.first} onChange={handleChange} required minLength={2} maxLength={256} />
        <input type="text" name="name.middle" placeholder="Middle Name" value={formData.name.middle} onChange={handleChange} minLength={2} maxLength={256} />
        <input type="text" name="name.last" placeholder="Last Name" value={formData.name.last} onChange={handleChange} required minLength={2} maxLength={256} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required pattern="^05\d{8,9}$" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required minLength={5} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required minLength={9} maxLength={20} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-])[A-Za-z\d!@#$%^&*-]{9,20}$" />
        <input type="text" name="image.url" placeholder="Image URL" value={formData.image.url} onChange={handleChange} pattern="^(https?|chrome):\/\/[^\s$.?#].[^\s]*$" />
        <input type="text" name="image.alt" placeholder="Image Alt Text" value={formData.image.alt} onChange={handleChange} minLength={2} maxLength={256} />
        <input type="text" name="address.state" placeholder="State" value={formData.address.state} onChange={handleChange} minLength={2} maxLength={256} />
        <input type="text" name="address.country" placeholder="Country" value={formData.address.country} onChange={handleChange} required minLength={2} maxLength={256} />
        <input type="text" name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} required minLength={2} maxLength={256} />
        <input type="text" name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} required minLength={2} maxLength={256} />
        <input type="number" name="address.houseNumber" placeholder="House Number" value={formData.address.houseNumber} onChange={handleChange} required min={2} max={256} />
        <input type="number" name="address.zip" placeholder="Zip Code" value={formData.address.zip} onChange={handleChange} required min={2} max={256} />
        <label>
          Are you a business user?
          <input type="checkbox" name="isBusiness" checked={formData.isBusiness} onChange={() => setFormData(prevState => ({ ...prevState, isBusiness: !prevState.isBusiness }))} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
