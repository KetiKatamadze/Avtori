import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthForm from "./components/AuthForm";
import About from "./components/ContentPages/About";
import Contact from "./components/ContentPages/Contact";
import FAQ from "./components/ContentPages/Faq";
import Terms from "./components/ContentPages/Terms";
import Products from "./components/ContentPages/Products";
import Cart from "./components/ContentPages/Cart";
import { CartProvider } from "./context/CartContext"; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<AuthForm type="login" />} />
          <Route path="/register" element={<AuthForm type="register" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
