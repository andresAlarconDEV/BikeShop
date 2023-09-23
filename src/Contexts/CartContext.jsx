import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addItem = (elemento, cantidad) => {
        if (isInCart(elemento.id)) {
            const actualizarCartItems = cartItems.map(e => {
                if (e.id === elemento.id)
                    return { ...e, cantidad: e.cantidad + cantidad }
                else return e
            })
            setCartItems(actualizarCartItems)
        }
        else {
            setCartItems(prev => [...prev, { ...elemento, cantidad }])

        }
    }

    const removeItem = id => {
        const itemsFiltered = cartItems.filter(item => item.id !== id)
        setCartItems(itemsFiltered)
}

    const clear = () => setCartItems([])

    const isInCart = (id) => {
        const existe = cartItems.some(e => e.id === id)
        if (existe) {
            return true
        } else {
            return false
        }
    }

    const cartItemTotal = cartItems.reduce((suma, val) => suma + val.cantidad, 0)

    const totalPrecio = cartItems.reduce((suma, val) => suma + val.cantidad * val.precio, 0)

return (
    <CartContext.Provider
        value={{ cartItems, addItem, isInCart, cartItemTotal, clear, removeItem, totalPrecio }}
    >
        {children}
    </CartContext.Provider>
)
}

