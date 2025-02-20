import './NavBar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

const NavBar = () => {

  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="/home">Guardianes del entorno</Navbar.Brand>
          <Navbar.Text className='navbar-element'>Puntuación</Navbar.Text>
          <Navbar.Text className='navbar-element'>Registro de áreas</Navbar.Text>
          <Navbar.Text className='navbar-element'>Registro de especies</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            {
              user ? <>
                <Navbar.Text className='navbar-element'>
                  Usuario: <a href="./">{user.name}</a>
                </Navbar.Text>
                
                <Navbar.Text className='navbar-element'>
                  <a href="./">Cerrar sesión </a>
                </Navbar.Text>
              </>
                : <Navbar.Text className='navbar-element'>
                  Usuario: <a href="./">Iniciar sesión</a>
                </Navbar.Text>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar