import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import NotFoundPage from './components/NotFound/NotFoundPage';
import { CartProvider } from './Contexts/CartContext';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
