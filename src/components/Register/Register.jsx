import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let User = {
        name: fullName,
        username: userName,
        email: email,
        password: password,
      };
      const response = await fetch(
        'https://mammal-excited-tarpon.ngrok-free.app/api/user/register?secret=TallerReact2025!',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            User
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Error en el servidor');
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);

      // Adjust this according to your API's response structure
      if (data.result) {
        // Navigate to home after successful registration
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      } else {
        setError('Registro no válido');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <h1>Guardianes</h1>
      <h2>Registrar cuenta nueva</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={fullName}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrar cuenta nueva'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        <Link to="/">Ya tengo una cuenta</Link>
      </p>
      {/* Spinner */}
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Register;
