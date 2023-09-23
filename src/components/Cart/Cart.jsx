import { useState, useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import TableItems from "./TableItems";
import { Link } from "react-router-dom";


const Cart = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        celular: "",
        email: ""

    })

    const { cartItems, clear, totalPrecio } = useContext(CartContext)

    const handleChange = ev => {
        setFormulario(prev => ({
            ...prev,
            [ev.target.name]: ev.target.value,
        }))
    }

    const enviarPedido = () => {
        const pedido = {
            buyer: formulario,
            cartItems,
            total: { totalPrecio }
        }
        if ((formulario.nombre) && (formulario.celular) && (formulario.email)) {

            const db = getFirestore()
            const orderCollection = collection(db, "pedidos")

            addDoc(orderCollection, pedido).then(({ id }) => {
                if (id) {
                    clear()
                    alert("su orden: " + id + " ha sido creada")
                }
            })
        }
        else {
            alert("Por favor diligencia los datos completos")
        }
    }

    return (

        (!cartItems[0]) ? <><h1>El carrito de compras esta vacio</h1>
        <Link to={`/`}>
        <Button variant="primary">Regresar</Button>
    </Link></> :
            <Container>
                <h1 className="tituloCompra">DETALLE DE COMPRA</h1>
                <TableItems />
                <h3 className="tituloCompra">Datos de contacto</h3>
                <Form noValidate >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={formulario.nombre}
                                name="nombre"
                                type="text"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={formulario.celular}
                                name="celular"
                                type="text"
                                required
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom03">
                            <Form.Label>Correo Electronico</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    onChange={handleChange}
                                    value={formulario.email}
                                    name="email"
                                    type="email"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Ingrese un correo correcto</Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <div className="containerButtons">
                        <Button type="button" className="btn btn-danger" onClick={() => clear()}>Eliminar orden</Button>
                        <Button type="button" className="btn btn-success" onClick={() => enviarPedido()}>Confirmar Compra</Button>
                    </div>
                </Form>
            </Container>
    )
}

export default Cart;