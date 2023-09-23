import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import Loading from '../Loading';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function ItemDetailContainer() {
    const { id } = useParams()
    const [productId, setProductId] = useState(null)
    const [loading, setLoading] = useState(true)
    // const { productId } = useId()
    useEffect(() => {
        const db = getFirestore()
    
        const refDoc = doc(db, "productos", id)

        getDoc(refDoc)
        .then(snapshot => {
            setProductId({id: snapshot.id, ...snapshot.data()})
        })
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <Loading />


    return (
        (productId.nombre)?
        <Container>
            <h1>DETALLE</h1>
            <ItemDetail productId={productId}/>
        </Container>:
        <Container><div>"Producto no encontrado o disponible en el momento"</div>
            <Link to={`/`}>
                <Button variant="primary">Regresar</Button>
            </Link>
            </Container>
    )
}

export default ItemDetailContainer;