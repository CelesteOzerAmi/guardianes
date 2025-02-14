import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'https://mammal-excited-tarpon.ngrok-free.app/api/user/login?secret=TallerReact2025!',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta del servidor:', data);

        if (data.isValid) {
          // Si es válido, muestra el spinner y redirige después de 2 segundos
          setTimeout(() => {
            navigate('/home');
          }, 2000);
        } else {
          setError('Correo o contraseña incorrectos');
          setLoading(false);
          navigate('/home');
        }
      } else {
        setError('Error en el servidor');
        setLoading(false);
        navigate('/home');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Error de conexión');
      setLoading(false);
      navigate('/home');
    }
  };

  return (
    <div className="login">
      <h1>Guardianes</h1>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        {error && <p className="error">{error}</p>}
        <p>
          <Link to="/register">Registrar cuenta nueva</Link>
        </p>
      </form>

      {/* Spinner */}
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
};

export default Login;