import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h1>Guardianes</h1>
      <h2>Iniciar sesión</h2>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
        <p>
          <Link to="/register">Registrar cuenta nueva</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;