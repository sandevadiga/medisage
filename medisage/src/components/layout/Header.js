import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={logo} alt="" />

      <ul className="nav-items">
        <li className="nav-item">
          <Link className="nav-link active"  to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link"  style={{paddingLeft: 13, textDecoration: 'none'}} to="/schedule">
            Schedule
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link"  to="/about">
            About
          </Link>
        </li>
      </ul>

      <div className="menu-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={{fill:"#000000"}}
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Header;
