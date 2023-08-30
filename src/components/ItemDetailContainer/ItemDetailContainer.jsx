import Container from 'react-bootstrap/Container';
import Data from "../../data/productos.json";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toUpper from '../../helpers/toUpper';
import useId from '../../hooks/useId';

function ItemDetailContainer() {
    const {productId} = useId()


    return (
        <Container>
            {
                (productId) ?
                    <Card className="text-center">
                        <Card.Header>{productId.categoria}</Card.Header>
                        <Card.Body>
                            <Card.Title>{toUpper(productId.nombre)}</Card.Title>
                            <Card.Text>
                                {productId.descripcion}
                                <Card.Img variant="top" src={productId.imagen} />
                            </Card.Text>
                            <Link to={`/`}>
                            <Button variant="primary">Regresar</Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer >${productId.precio}</Card.Footer>
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