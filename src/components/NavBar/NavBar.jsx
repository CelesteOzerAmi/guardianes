import './NavBar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { logout } from "../../storage/userSlice";

const NavBar = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="/home">Guardianes del entorno</Navbar.Brand>

          {
            user ?
              <>
                <Navbar.Text className='navbar-element'>
                  <a href="/activities">Actividades de conservación</a>
                </Navbar.Text>
                <Navbar.Text className='navbar-element'>
                  <a href="/areaupload">Registro de áreas</a>
                </Navbar.Text>
                <Navbar.Text className='navbar-element'>
                  <a href="/speciesupload">Registro de especies</a>
                </Navbar.Text>
              </>
              :
              <></>
          }
          <Navbar.Collapse className="justify-content-end">
            {
              user ? <>
                <Navbar.Text className='navbar-element'>
                  Usuario: <a href="./">{user.name}</a>
                </Navbar.Text>

                <Navbar.Text className='navbar-element'>
                  <button onClick={() => dispatch(logout())}>
                    <a href="./">Cerrar sesión</a>
                  </button>
                </Navbar.Text>
              </>
                : <>
                  <Navbar.Text className='navbar-element'>
                    <a href="./">Iniciar sesión</a>
                  </Navbar.Text>
                  |
                  <Navbar.Text className='navbar-element'>
                    <a href="./register">Registrarme</a>
                  </Navbar.Text>
                </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar