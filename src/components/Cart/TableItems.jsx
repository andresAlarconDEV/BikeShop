import Table from 'react-bootstrap/Table';
import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";
import ItemTable from './ItemTable';


const TableItems = () => {

    const { cartItems, removeItem, totalPrecio } = useContext(CartContext)
    return (
        <Table striped="row" bordered hover >
            <thead>
                <tr>
                    <th></th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
            </thead>
            <ItemTable />
        </Table>
    )
}

export default TableItems;