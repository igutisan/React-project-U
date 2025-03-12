import { useState } from 'react';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedLayout from './components/protectedLayout.jsx';
import Card from './pages/Card.jsx';

function AuthPage() {
  
    return (
    
        <>
        

        <div className="bg-gray-300">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedLayout />} >
            <Route path="/card/:id" element={<Card />} />
             <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        </div>
        </>
    )
  }
  
  export default AuthPage;