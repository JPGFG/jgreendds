import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          Home
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <CustomLink to="/procedures">Procedures</CustomLink>
          <CustomLink to="/postop">Post-Op</CustomLink>
          <CustomLink to="/billing">Billing</CustomLink>
          <CustomLink to="/FAQ">FAQs</CustomLink>
          <CustomLink to="/directions">Directions</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
