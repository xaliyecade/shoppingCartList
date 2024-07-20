import React, { useState } from 'react';
import decoration from '../assets/images/decoration.png';
import ceiling from '../assets/images/ceiling.png';
import floor from '../assets/images/floor.png';
import furniture from '../assets/images/furniture.png';
import lamps from '../assets/images/lamps.png';
import wooden from '../assets/images/wooden.png';

const Shop = ({ addToCart, toggleFavorite }) => {
  const items = [
    { id: 1, img: decoration, name: 'Decoration', count: 1065, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
    { id: 2, img: ceiling, name: 'Ceiling', count: 827, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
    { id: 3, img: floor, name: 'Floor', count: 1423, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
    { id: 4, img: furniture, name: 'Furniture', count: 4126, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
    { id: 5, img: lamps, name: 'Lamps', count: 1126, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
    { id: 6, img: wooden, name: 'Wooden', count: 1126, price: 29.00, description: "Juliet Rowley Lounge Sofa" },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
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
    <div className="flex flex-col items-center min-h-screen bg-white py-10">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      <div className="w-full max-w-2xl">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-4 border-b hover:bg-gray-100 cursor-pointer" onClick={() => handleItemClick(item)}>
            <div className="flex items-center">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4"/>
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.count} items</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              &rarr;
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <button className="float-right mb-4" onClick={handleClosePopup}>X</button>
            <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-48 object-cover mb-4"/>
            <h2 className="text-2xl font-bold">{selectedItem.description}</h2>
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
    </div>
  );
};

export default Shop;
