import React from 'react';
import Register from './pages/auth/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget-password' element={<ForgotPassword />} />
          <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
          {/* <Route path='/reset-password' element={}  /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;