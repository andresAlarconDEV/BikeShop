import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Item = ({ producto }) =>

    <Card key={producto.id} style={{ width: '18rem' }}>
        <div className='imagenTienda'>
        <Card.Img variant="top" src={producto.imagen}/>
        </div>
        <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Text>${producto.precio}</Card.Text>
            <Link to={`/item/${producto.id}`}>
                <Button variant="primary">Detalle</Button>
            </Link>
        </Card.Body>
    </Card>

export default Item;