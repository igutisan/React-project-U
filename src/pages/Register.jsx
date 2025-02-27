import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

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

    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        

        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md mx-auto"
        >
          <h1 className="text-3xl font-semibold text-center mb-4">
          Registro
        </h1>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Registrar
          </button>

          <p className="text-center text-gray-600 text-sm mt-4">
            <span
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              ¿Ya tienes una cuenta?
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Register;
