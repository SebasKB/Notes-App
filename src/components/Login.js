// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar las credenciales (usuario: "usuario", contraseña: "contraseña")
    if (username === 'usuario' && password === 'contraseña') {
      handleLogin();
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome back!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
