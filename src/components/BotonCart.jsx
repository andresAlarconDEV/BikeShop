import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function BotonCart() {
    return <Link to={`/Cart`}>
        <div style={{width:"100%", margin: "10px auto"}}>
        <Button variant="primary" >Continuar Compra</Button>
        </div>
        </Link>
}
export default BotonCart