import { useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Routes, Route, Router } from 'react-router-dom';

function AuthPage() {
  
  
    return (
    
     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        

    )
  }
  
  export default AuthPage;