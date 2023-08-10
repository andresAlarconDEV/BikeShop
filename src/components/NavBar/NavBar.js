import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/icono.png';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container className="xxl">
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" height='40'/>
            Bike Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Contáctanos</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bicicletas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ropa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seguridad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Grupeta</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">acompañamiento Motorizado</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Taller</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;