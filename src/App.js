// App.js
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MenProducts from './Pages/AllProducts/MenProducts';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import { ProductsProvider, ProductsContext } from './contextapi/ContextApi';
import Home from './Pages/Home/Home';
import WomenProducts from './Pages/AllProducts/WomenProducts';
import Footer from './components/Footer/Footer';
import KidProducts from './Pages/AllProducts/KidProducts';

const App = () => {
  return (
    <Router>
      <ProductsProvider>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/kid" element={<KidProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ProductsProvider>
    </Router>
  );
};

const NavbarWrapper = () => {
  const { getTotalCartItems } = useContext(ProductsContext);
  const [cartCount, setCartCount] = useState(getTotalCartItems());

  useEffect(() => {
    setCartCount(getTotalCartItems());
  }, [getTotalCartItems]);

  return <Navbar cartCount={cartCount} />;
};

export default App;
