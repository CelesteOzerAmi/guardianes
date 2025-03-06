import './NavBar.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../storage/userSlice';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar className='bg-body-tertiary navbar'>
        <Container>
          <Navbar.Brand>
            <Link to='/home'>Guardianes del entorno</Link>
          </Navbar.Brand>

          {
            user ?
              <>
                <Navbar.Text className='navbar-element'>
                  <Link to='/activities'>Actividades de conservación</Link>
                </Navbar.Text>
                <Navbar.Text className='navbar-element'>
                  <Link to='/areaupload'>Registro de áreas</Link>
                </Navbar.Text>
                <Navbar.Text className='navbar-element'>
                  <Link to='/speciesupload'>Registro de especies</Link>
                </Navbar.Text>
              </>
              :
              <></>
          }
          <Navbar.Collapse className='justify-content-end'>
            {
              user ? <>
                <Navbar.Text className='navbar-element'>
                  Usuario: <Link to='/user'>{user.name}</Link>
                </Navbar.Text>

                <Navbar.Text className='navbar-element'>
                  <button onClick={() => dispatch(logout())}>
                    <Link to='/'>Cerrar sesión</Link>
                  </button>
                </Navbar.Text>
              </>
                : <>
                  <Navbar.Text className='navbar-element'>
                    <Link to='/'>Iniciar sesión</Link>
                  </Navbar.Text>
                  |
                  <Navbar.Text className='navbar-element'>
                    <Link to='/register'>Registrarme</Link>
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