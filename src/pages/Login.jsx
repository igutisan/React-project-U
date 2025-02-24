import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();


    const [users, setUsers] = useState([
        { username: "Usuario1", email: "usuario1@example.com", password: "123456" },
        { username: "Usuario2", email: "usuario2@example.com", password: "abcdef" }
    ]);


    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === formData.email && user.password === formData.password); 
        if (!user) {
            setError('Correo o contraseña incorrectos');
            return;
        }
        console.log('Inicio de sesión exitoso', user);
        setError('');

        setFormData({
            email: '',
            password: ''
        });

    }

    const goToRegister = () => {
        navigate('/register', {state: {users}});
    }



    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-medium">Correo electrónico</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
                    required
                />

                <label htmlFor="password" className="text-gray-700 font-medium">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 my-2"
                    required
                />

                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg mt-4 transition duration-300"
                    
                >
                    
                    Ingresar
                </button>

                <button 
                    type="button" 
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg mt-3 transition duration-300"
                    onClick={goToRegister}
                    
                >
                    
                   Registrarse
                </button>
            </form>
        </div>
    </div>
    );
}

export default Login;
