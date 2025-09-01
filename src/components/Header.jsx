import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="logo">
        <Link to="/" className="logo-link">
          Tattoo Avtori
        </Link>
      </span>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">terms</a>
          </li>
        </ul>
      </nav>

      <div>
        <Link to="/login" className="login-btn">
          Login
        </Link>
        <Link to="/register" className="register-btn">
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
