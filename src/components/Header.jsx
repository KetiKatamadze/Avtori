import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
// import CartIcon from "../assets/cart-icon.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="left-section">
        <NavLink to="/" className="logo-link">Avtori</NavLink>
      </div>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/faq" onClick={() => setIsOpen(false)}>FAQ</NavLink></li>
          <li><NavLink to="/terms" onClick={() => setIsOpen(false)}>Terms</NavLink></li>

        </ul>
      </nav>

      <div className="auth-buttons">
        <NavLink to="/cart" className="cart-btn">cart</NavLink>
        <NavLink to="/login" className="login-btn">Login</NavLink>
        <NavLink to="/register" className="register-btn">Register</NavLink>
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
