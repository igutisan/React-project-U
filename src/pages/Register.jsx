import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Register() {

    const location = useLocation();
    const [users, setUsers] = useState(location.state?.users || []);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (users.some((user) => user.email === formData.email)) {
            alert("El correo electrónico ya está en uso");
            return;
        }

        console.log("Registrando:", formData);
        setUsers([...users, formData]);

        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Registro</h1>
<form 
    onSubmit={handleSubmit} 
    className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
>
    <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Nombre de usuario
        </label>
        <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Correo electrónico
        </label>
        <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
        </label>
        <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Confirmar contraseña
        </label>
        <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>

    <button 
        type="submit" 
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
    >
        Registrar
    </button>

    <p className="text-center text-gray-600 text-sm mt-4">
        ¿Ya tienes una cuenta?  
        <a href="/login" className="text-blue-600 hover:underline ml-1">
            Inicia sesión aquí
        </a>
    </p>
</form>
        </>
    );
}

export default Register;
