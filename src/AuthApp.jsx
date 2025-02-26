import { useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedLayout from './components/protectedLayout.jsx';

function AuthPage() {
  
    return (
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedLayout />} >
             <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        

    )
  }
  
  export default AuthPage;