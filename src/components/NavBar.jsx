import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ toggleContactUs }) => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
      <div className="text-3xl font-bold text-white">Shopping Cart List</div>
      <div className="space-x-6">
        <Link
          to="/"
          className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="/shop"
          className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out"
        >
          Shop
        </Link>
        <Link
          to="/added-carts"
          className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out"
        >
          Added Carts
        </Link>
        <Link
          to="/favorites"
          className="text-white text-lg hover:text-gray-200 transition duration-300 ease-in-out"
        >
          Favorites
        </Link>
      </div>
      <button
        onClick={toggleContactUs}
        className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out"
      >
        Contact Us
      </button>
    </nav>
  );
};

export default NavBar;
