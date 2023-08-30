import Container from 'react-bootstrap/Container';
import { Link, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useList from '../../hooks/useList';


function ItemListContainer(props) {
  const {productos} = useList()

  return (
    
    <Container className="productos d-flex flex-wrap">
      {
        productos.map(producto => (
        <Card key={producto.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>${producto.precio}</Card.Text>
          <Link to={`/item/${producto.id}`}>
          <Button variant="primary">Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
      ))
      }
    </Container>
    
  );
}

export default ItemListContainer;