import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCard, CardData } from '../API/CreateAcardAPI';
import { CardResponse } from '../@types/type';
interface Props {
  token: string | null;
}
const CreateCard: React.FC<Props> = ({ token = '' }: Props) => {
  if (token === null) {
    token = '';
  }
 const [formData, setFormData] = useState<CardData>({
  title: '',
  subtitle: '',
  description: '',
  phone: '',
  email: '',
  web: '',
  image: { url: '', alt: '' },
  address: { state: '', country: '', city: '', street: '', houseNumber: 0, zip: 0 },
});



  const navigate = useNavigate();

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  if (name.startsWith('address.')) {
    const addressField = name.split('.')[1]; // Extract the field name from the 'address.fieldName' format
    setFormData(prevFormData => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        [addressField]: value
      }
    }));
  } else {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const data: CardResponse = await createCard(formData, token!);
    console.log('Card created:', data);
    navigate('/');
    alert('Card created successfully!');
  } catch (error) {
    console.error('Error creating card:', error);
    alert('Failed to create card. Please try again later.');
  }
};


  return (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Create a New Card</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Subtitle</label>
        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Website</label>
        <input
          type="url"
          name="web"
          value={formData.web}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
        />
      </div>
      
        <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
            type="url"
            name="image"
            value={formData.image.url}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Image Alt Text</label>
            <input
            type="text"
            name="image"
            value={formData.image.alt}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
            type="text"
            name="state"
            value={formData.address.state}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <input
            type="text"
            name="country"
            value={formData.address.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
            type="text"
            name="city"
            value={formData.address.city}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />

        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <input
            type="text"
            name="street"
            value={formData.address.street}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />

        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">House Number</label>
            <input
            type="number"
            name="houseNumber"
            value={formData.address.houseNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />


        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Zip</label>
            <input
            type="number"
            name="zip"
            value={formData.address.zip}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
            />


        </div>
        <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
        Create Card
        </button>
    </form>
    </div>
    );

}

export default CreateCard;