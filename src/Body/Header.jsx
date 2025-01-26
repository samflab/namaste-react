import "./styles/header.scss";
import logo from "../assets/logo-light.svg";
import { useState } from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="navbar-container">
        <div>
          <img src={logo} alt="logo" height="50" width="120" />
        </div>

        <nav className="nav-elements">
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Blog</li>
          </ul>
          <button>Login</button>
        </nav>
      </div>

      
    </div>
  );
};

export default Header;
