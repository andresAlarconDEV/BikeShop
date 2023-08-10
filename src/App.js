import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Bienvenidos a Bike Shop" construccion="Nos encontramos en la construcción de nuestro inventario, pronto estaremos disponibles para ti"/>
    </>
  );
}

export default App;
