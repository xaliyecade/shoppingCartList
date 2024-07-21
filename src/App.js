import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GetStarted from './components/GetStarted';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop';
import AddedCarts from './components/AddedCarts';
import Favorites from './components/Favorites';
import NavBar from './components/NavBar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  const toggleFavorite = (item) => {
    setFavoriteItems(prevState => {
      if (prevState.some(favItem => favItem.id === item.id)) {
        return prevState.filter(favItem => favItem.id !== item.id);
      } else {
        return [...prevState, item];
      }
    });
  };

  const removeFromFavorites = (item) => {
    setFavoriteItems(favoriteItems.filter(favItem => favItem.id !== item.id));
  };

  const toggleContactUs = () => {
    setIsContactUsOpen(!isContactUsOpen);
  };

  return (
    <Router>
      <div className="App">
        <NavBar toggleContactUs={toggleContactUs} />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/signin" />} />
          <Route path="/about" element={<AboutUs addToCart={addToCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} toggleFavorite={toggleFavorite} />} />
          <Route path="/added-carts" element={<AddedCarts cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/favorites" element={<Favorites favoriteItems={favoriteItems} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
        {isContactUsOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
              <button className="float-right mb-4" onClick={toggleContactUs}>X</button>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea className="w-full px-3 py-2 border rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
              </form>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
