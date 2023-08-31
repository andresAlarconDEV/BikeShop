import Container from 'react-bootstrap/Container';
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toUpper from '../../helpers/toUpper';
import useId from '../../hooks/useId';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContainer() {
    const { productId } = useId()


    return (
        <Container>
            {
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
                            <ItemCount stock={productId.stock}></ItemCount>
                                <Button variant="primary">Agregar a Carrito</Button>
                        </Card.Body>
                        <Card.Footer ><Link to={`/`}>
                            <Button variant="primary">Regresar</Button>
                        </Link></Card.Footer>
                    </Card>
                    : <Container><div>"Producto no encontrado o disponible en el momento"</div>
                        <Link to={`/`}>
                            <Button variant="primary">Regresar</Button>
                        </Link></Container>
            }
        </Container>
    )
}

export default ItemDetailContainer;