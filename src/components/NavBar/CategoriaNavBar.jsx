import data from "../../data/productos.json";
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function categoriaNavBar() {
    const categorias = data.map(producto => producto.categoria);
    const categoriasMenu = [... new Set(categorias)];


    return (
        categoriasMenu.map(value => (
            <NavDropdown.Item key={value} as={NavLink} to={`/category/${value}`}>{value}
            </NavDropdown.Item>
        ))
    )
}


export default categoriaNavBar;