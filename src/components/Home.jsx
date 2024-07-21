import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/product1.jpg';
import image2 from '../assets/images/product2.jpg';
import image3 from '../assets/images/product3.jpg';
import logo1 from '../assets/images/logo1.jpg';
import logo2 from '../assets/images/logo2.jpg';
import logo3 from '../assets/images/logo3.jpg';
import logo4 from '../assets/images/logo4.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleDiscoverMoreClick = () => {

    navigate('/about');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Discover the perfect blend of style</h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering your life with cutting-edge wireless technology. Stay connected effortlessly, anytime, anywhere.
        </p>
        <button
          onClick={handleDiscoverMoreClick}
          className="mt-8 bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 px-6 rounded-full hover:opacity-90"
        >
          Discover More
        </button>
      </div>
      <div className="mt-10 flex space-x-4">
        <img src={image1} alt="product1" className="w-40 h-40"/>
        <img src={image2} alt="product2" className="w-40 h-40"/>
        <img src={image3} alt="product3" className="w-40 h-40"/>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Trusted Partners</h2>
        <div className="flex space-x-4 mt-4">
          <img src={logo1} alt="partner1" className="h-12"/>
          <img src={logo2} alt="partner2" className="h-12"/>
          <img src={logo3} alt="partner3" className="h-12"/>
          <img src={logo4} alt="partner4" className="h-12"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
