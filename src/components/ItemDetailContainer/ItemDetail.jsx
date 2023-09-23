import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toUpper from '../../helpers/toUpper';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import BotonCart from '../BotonCart';



const ItemDetail = ({ productId }) => {
    const { addItem, cartItems } = useContext(CartContext)
    const onAdd = count => addItem(productId, count)


    return (
        (productId) ?
            <Card key={productId.id} style={{ width: "40%", margin: "auto" }} className="text-center">
                <Card.Header>{productId.categoria}</Card.Header>
                <Card.Body>
                    <Card.Title style={{ display: "flex", flexDirection: "column" }} >{toUpper(productId.nombre)}</Card.Title>
                    <Card.Text style={{ display: "flex", flexDirection: "column" }}>
                        {productId.descripcion}
                        <Card.Img variant="top" src={productId.imagen} />
                        ${productId.precio}
                    </Card.Text>
                    <ItemCount stock={productId.stock} onAdd={onAdd}/>
                    {(cartItems[0]) && <BotonCart />}
                </Card.Body>
                <Card.Footer ><Link to={`/`}>
                    <Button variant="primary">Regresar</Button>
                </Link></Card.Footer>
            </Card>
            : <Container><div>"Producto no encontrado o disponible en el momento"</div>
                <Link to={`/`}>
                    <Button variant="primary">Regresar</Button>
                </Link>
            </Container>
    )
}

export default ItemDetail