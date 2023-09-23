import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


function useId () {

    const { id } = useParams()
    const [productId, setProductId] = useState(null)

    useEffect(() => {
        setProductId(Data.find(product => product.id === id))

    }, [id])



    return {productId}
}

export default useId;