import { useEffect, useState } from 'react';
import Data from "../data/productos.json";
import { useParams } from "react-router-dom";

function useList() {
    const { categoryId } = useParams()
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (categoryId) {
            const productosFiltradosPorCategoria = Data.filter(
                producto => producto.categoria == categoryId
            )
            setProductos(productosFiltradosPorCategoria)
        } else {
            setProductos(Data)
        }
    }, [categoryId])



    return { productos }
}

export default useList;