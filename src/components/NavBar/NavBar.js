import './NavBar.css';
import React from 'react';
import {  Link  } from "react-router-dom";

const NavBar = () => {
  return (
      <div className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to="../home">Inicio</Link>
            </li>
            <li>
              <Link to="./">Nosotros</Link>
            </li>
            <li>
              <Link to="./">Puntuaciones</Link>
            </li>
            <li>
              <Link to="./">Registros</Link>
            </li>
            <li>
              <Link to="/">Registrarme | Iniciar sesión</Link>
            </li>
          </ul>
        </nav>        
      </div>
  )
}

export default NavBar