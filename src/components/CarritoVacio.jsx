import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const CarritoVacio = () => {
    return (
    <div className="carritoVacio">
        <h2>
        El carrito de compras esta vacio
        </h2>
        <img src='https://img.freepik.com/vector-premium/carrito-compras-supermercado-vacio-realista-aislado-blanco_53562-6809.jpg?w=2000' width={"200"}  height={"200"} alt="errorCarrito" />
        <Link to={`/`}>
            <Button variant="primary">Regresar</Button>
        </Link>
    </div>)
}

export default CarritoVacio
