import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/icono.png';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import CategoriaNavBar from './CategoriaNavBar';



function NavBar() {

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container className="xxl">
        <NavLink to="/">
          <img src={logo} alt="logo" height='40' />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Inicio</NavLink>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <CategoriaNavBar />
            </NavDropdown>
            <NavLink to="/test" className="nav-link">Contáctanos</NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;