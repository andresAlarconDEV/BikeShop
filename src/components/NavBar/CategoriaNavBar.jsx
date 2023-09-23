import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore"

function CategoriaNavBar() {
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const refCollection = collection(db, "productos")
        getDocs(refCollection)
            .then(snapshot => {
                if (snapshot.empty) { console.log("no resultados") }
                else {
                    setCategorias(snapshot.docs.map(doc => doc.data().categoria))
                }
            })
    }, [])
    const categoriasMenu = [... new Set(categorias)];

    return (
        categoriasMenu.map(value => (
            <NavDropdown.Item key={value} as={NavLink} to={`/category/${value}`}>{value}
            </NavDropdown.Item>
        ))
    )
}


export default CategoriaNavBar; 