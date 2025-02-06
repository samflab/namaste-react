import "./styles/header.scss";
import logo from "../assets/logo-light.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-container">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" height="50" width="120" />
        </Link>
      </div>

      <nav className="nav-elements">
        <ul className="nav-links">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Header;
