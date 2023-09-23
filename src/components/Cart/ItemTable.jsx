import { CartContext } from "../../Contexts/CartContext";
import { useContext } from "react";

const ItemTable = () => {

    const { cartItems, removeItem, totalPrecio } = useContext(CartContext)

    return (
        <tbody>
            {cartItems.map(item => (
                <tr key={item.id}>
                    <td>
                        <img src={item.imagen} width={"80"} />
                    </td>
                    <td>{item.nombre}</td>
                    <td>{item.descripcion}</td>
                    <td>${item.precio}</td>
                    <td>{item.cantidad}</td>
                    <td>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </td>
                </tr>
            ))}
            <tr>
                <td colSpan={3}>Total</td>
                <td colSpan={3}>${totalPrecio}</td>
            </tr>
        </tbody>
    )

}

export default ItemTable