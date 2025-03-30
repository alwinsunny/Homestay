import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Bookings', description: 'Explore and book homestays.', path: '/browse' },
    { title: 'My Bookings', description: 'View and manage your reservations.', path: '/my-bookings' },
    { title: 'My Profile', description: 'Update personal details and preferences.', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      

      {/* Main Content */}
      <div className="container mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold">Welcome, {user?.name} 🏡</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
