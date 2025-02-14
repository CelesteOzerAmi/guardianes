import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <h1>Guardianes</h1>
      <h2>Registrar cuenta nueva</h2>
      <form>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">
          <Link to="/home">Registrar cuenta nueva</Link>
        </button>
      </form>
      <p>
        <Link to="/">Ya tengo una cuenta</Link>
      </p>
    </div>
  );
};

export default Register;