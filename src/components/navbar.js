import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/menu" || location.pathname === "/reservations" || location.pathname === "/services";

  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/services">Our services</Link>

          {isHomePage ? (
            <ScrollLink
              to="contact-us"
              smooth={true}
              duration={500}
              offset={-70} // Adjust based on navbar height
            >
              Contact Us
            </ScrollLink>
          ) : (
            <Link to="/#contact-us">Contact Us</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
