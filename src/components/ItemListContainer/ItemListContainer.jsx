import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import Loading from '../Loading'
import { getFirestore, getDocs, collection } from "firebase/firestore"

function ItemListContainer(props) {
  const { categoryId } = useParams()
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()

    const refCollection = collection(db, "productos")

    getDocs(refCollection)
      .then(snapshot => {
        if (snapshot.empty) { console.log("no resultados") }
        else {
        if (categoryId) {
          const prodCategoria = snapshot.docs.filter(doc => doc.data().categoria === categoryId)
          setProductos(prodCategoria.map(doc => {
            return { id: doc.id, ...doc.data() }
          }))
        }
        else {
          setProductos(snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
          })
          )
        }}
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  if (loading) return <Loading />


  return (

    <Container className="productos d-flex flex-wrap">
      <ItemList productos={productos} />
    </Container>

  );
}

export default ItemListContainer;