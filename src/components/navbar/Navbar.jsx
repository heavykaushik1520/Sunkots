import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "/images/navbar/main_logo.png";
import { RiShoppingCart2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "@fontsource/playfair-display";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="//">
            <img src={logoMain} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="//" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} >Products</Link>
            </li>

            <li>
              <Link to="/infrastructure" onClick={() => setIsMobileMenuOpen(false)}>Infrastructure</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>

        

        <div className="navbar-cart">
          <Link to="/cart" className="flex items-center gap-2">
            <RiShoppingCart2Line className="cart-icon text-2xl" />
           
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
