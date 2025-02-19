import './NavBar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {

  return (
    <>
      <Navbar className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="/home">Guardianes del entorno</Navbar.Brand>
          <Navbar.Text className='navbar-element'>Puntuación</Navbar.Text>
          <Navbar.Text className='navbar-element'>Registro de áreas</Navbar.Text>
          <Navbar.Text className='navbar-element'>Registro de especies</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Usuario: <a href="./">Lucas S.</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar