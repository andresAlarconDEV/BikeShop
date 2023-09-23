import Item from "../Item/Item";


const ItemList = ({ productos }) => 

    productos.map((producto) =>
    
        (producto.stock >= 1) && 
        // alert(producto.stock)
        <Item key={producto.id} producto={producto} />
    );


export default ItemList;