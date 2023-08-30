import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/icono.png';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import CategoriaNavBar from './CategoriaNavBar';
import NotFoundPage from '../NotFound/NotFoundPage';


function NavBar() {

  return (
    <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container className="xxl">
          <NavLink to="/">
            <img src={logo} alt="logo" height='40' />
          </NavLink>
          <Navbar.Brand to="/" as={NavLink}>Bike Shop</Navbar.Brand>
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
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;