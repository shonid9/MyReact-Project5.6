import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

interface User {
  _id: string;
  name: {
    first: string;
    middle?: string;
    last: string;
  };
  email: string;
  isBusiness: boolean;
}

const AdminPanel: React.FC = () => {
const { isAuthenticated } = useAuth();
const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUsers(response.data);
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data?.message || 'Failed to fetch users');
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
      }
    };

    if (isAuthenticated) {
      fetchUsers();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <div>You must be logged in to view this page.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      {error && <div className="text-red-500">{error}</div>}
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Middle Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Business Account</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user.name.first}</td>
              <td className="py-2 px-4 border-b">{user.name.middle || ''}</td>
              <td className="py-2 px-4 border-b">{user.name.last}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.isBusiness ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
