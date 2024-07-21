import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the Sign Up page
  };

  const handleSignIn = () => {
    navigate('/signin'); // Navigate to the Sign In page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white bg-opacity-75 p-12 rounded-lg text-center shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Get Started</h1>
        <p className="text-lg mb-6">Start with sign up or sign in</p>
        <button onClick={handleSignUp} className="bg-pink-500 text-white py-3 px-4 rounded-full mb-4 w-full">Sign Up</button>
        <button onClick={handleSignIn} className="bg-pink-500 text-white py-3 px-4 rounded-full w-full">Sign In</button>
      </div>
    </div>
  );
};

export default GetStarted;
