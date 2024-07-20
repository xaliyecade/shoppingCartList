import React from 'react';

const AddedCarts = ({ cartItems, removeFromCart }) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white py-10">
      <h1 className="text-4xl font-bold mb-8">Added Carts</h1>
      <div className="w-full max-w-2xl">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">No items in cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4"/>
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item)} className="text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddedCarts;
