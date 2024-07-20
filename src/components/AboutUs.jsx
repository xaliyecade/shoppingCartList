import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import premiumSound from '../assets/images/image1.png';
import sportsSound from '../assets/images/image2.png';
import everydayUseable from '../assets/images/image3.png';
import laptop from '../assets/images/image4.png';

const AboutUs = ({ addToCart, toggleFavorite }) => {
  const items = [
    { id: 1, img: premiumSound, name: 'Premium Sound Earbuds', description: "Best for premium sound quality.", price: 29.00 },
    { id: 2, img: sportsSound, name: 'Sports Sound Earbuds', description: "Perfect for sports activities.", price: 39.00 },
    { id: 3, img: everydayUseable, name: 'Everyday Useable Earbuds', description: "Great for daily use.", price: 19.00 },
    { id: 4, img: laptop, name: 'Laptop', description: "High performance laptop.", price: 999.00 },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const handleDiscoverClick = (item) => {
    setSelectedItem(item);
    navigate('/about');
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedItem);
    setSelectedItem(null);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(selectedItem);
    setSelectedItem({ ...selectedItem, isFavorite: !selectedItem.isFavorite });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <button className="bg-gray-200 text-black py-2 px-4 rounded-full hover:bg-gray-300 mt-4">
          About Us
        </button>
        <h1 className="text-4xl font-bold mt-8">Elevate your Experience</h1>
      </div>
      <div className="mt-10 flex space-x-4">
        {items.map((item, index) => (
          <div key={index} className="bg-yellow-100 p-4 rounded-lg text-center">
            <img src={item.img} alt={item.name} className="w-40 h-40 mx-auto"/>
            <h2 className="mt-4 font-semibold">{item.name}</h2>
            <button onClick={() => handleDiscoverClick(item)} className="mt-2 bg-white text-black py-1 px-3 rounded-full border hover:bg-gray-100">
              Discover More
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <button className="float-right mb-4" onClick={handleClosePopup}>X</button>
            <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
            <p className="text-gray-700 mt-2">{selectedItem.description}</p>
            <p className="text-gray-700 mt-2">${selectedItem.price.toFixed(2)}</p>
            <div className="flex justify-between items-center mt-4">
              <button onClick={handleAddToCart} className="bg-black text-white py-2 px-4 rounded-full">ADD TO CART</button>
              <button onClick={handleToggleFavorite} className={`text-2xl ${selectedItem.isFavorite ? 'text-red-500' : 'text-gray-500'}`}>
                ♥
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <div className="text-3xl mb-2">🎵</div>
          <h3 className="text-xl font-bold">Best Sound Quality</h3>
          <p className="mt-2 text-gray-600">
            A virtual receptionist is software that ensures that no customer call goes and resolves basic customer needs.
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <div className="text-3xl mb-2">♻️</div>
          <h3 className="text-xl font-bold">Eco-Friendly</h3>
          <p className="mt-2 text-gray-600">
            A virtual receptionist is software that ensures that no customer call goes and resolves basic customer needs.
          </p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg text-center">
          <div className="text-3xl mb-2">💎</div>
          <h3 className="text-xl font-bold">Affordable Pricing</h3>
          <p className="mt-2 text-gray-600">
            A virtual receptionist is software that ensures that no customer call goes and resolves basic customer needs.
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="text-xl font-bold">Modern Style</h3>
          <p className="mt-2 text-gray-600">
            A virtual receptionist is software that ensures that no customer call goes and resolves basic customer needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
