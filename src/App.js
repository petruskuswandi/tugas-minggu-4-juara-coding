import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import ProductCatalog from '../components/ProductCatalog';
import AddToCart from '../components/AddToCart';
import ShoppingCart from '../components/ShoppingCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/add-to-cart/:id" element={<AddToCart />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;