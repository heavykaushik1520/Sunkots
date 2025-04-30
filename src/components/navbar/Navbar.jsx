import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "/images/navbar/logo.png"; 
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
          <a href="/">
            <img src={logoMain} alt="Logo" />
          </a>
        </div>

        
        <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        
        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            
            <li><Link to="/infrastructure">Infrastructure</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>

        {/* Cart */}
        <div className="navbar-cart">
          <a href="#">
            <RiShoppingCart2Line className="cart-icon" />
            <div className="cart-text">
              <span>Your Cart:</span>
              <div><strong>0 Items</strong> - <strong>$0.00</strong></div>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
