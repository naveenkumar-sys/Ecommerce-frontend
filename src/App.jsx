import React from 'react';
import Register from './pages/auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Home from './pages/buyer/Home';
import ProductDetail from './pages/buyer/ProductDetail';
import CartPage from './pages/buyer/CartPage';
import CartContext from './context/CartContext';

const App = () => {
  return (
    <CartContext>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path='/productDetails/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartContext>
  );
};

export default App;