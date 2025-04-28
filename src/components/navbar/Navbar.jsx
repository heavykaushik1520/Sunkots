import React, { useState } from "react";
import logoMain from "/images/navbar/logo.png"; // Make sure path is correct
import { RiShoppingCart2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "@fontsource/playfair-display"; 
import "./Navbar.css"; // Linking the external CSS

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src={logoMain} alt="Logo" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Navigation Links */}
        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/menu">Menu</a></li>
            
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contacts">Contacts</a></li>
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
