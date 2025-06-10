// src/components/Navbar.js
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logoMain from "/images/navbar/main_logo.png"; // Ensure this path is correct for your project
// import {
//   RiShoppingCart2Line,
//   RiMenu3Line,
//   RiCloseLine,
//   RiUser3Line,
// } from "react-icons/ri";
// import { useAuth } from "../../context/AuthContext";
// import "./Navbar.css";

// import "@fontsource/playfair-display";

// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { isAuthenticated, logout } = useAuth();
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const handleLogout = () => {
//     logout();
//     setIsMobileMenuOpen(false);
//     navigate("/login");
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={logoMain} alt="Logo" />
//           </Link>
//         </div>

//         <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
//           {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
//         </div>

//         <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
//           <ul>
//             <li>
//               <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/infrastructure"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Infrastructure
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                 Contact
//               </Link>
//             </li>

//             {isAuthenticated ? (
//               <>
//                 <li>
//                   <Link
//                     to="/profile"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                       className="auth-button flex items-center text-sm font-semibold hover:underline gap-1"
//                   >
//                     <RiUser3Line className="text-xl" /> Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}   className="logout-button flex items-center gap-1">
//                     Logout
//                   </button>
//                 </li>
//               </>
//             ) : (
//               <li>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="auth-button"
//                 >
//                   Login
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </nav>

//         {isAuthenticated && (
//           <div className="navbar-cart">
//             <Link to="/cart" className="flex items-center gap-2">
//               <RiShoppingCart2Line className="cart-icon text-2xl" />
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

// export default Navbar;

// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "/images/navbar/main_logo.png";
import {
  RiShoppingCart2Line,
  RiMenu3Line,
  RiCloseLine,
  RiUser3Line,
} from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoMain} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
            </li>
            <li>
              <Link to="/infrastructure" onClick={() => setIsMobileMenuOpen(false)}>Infrastructure</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="navbar-icons flex items-center gap-8 pr-4">
          {isAuthenticated ? (
            <>
              <Link to="/cart" className="text-[#96712a] text-4xl">
                <RiShoppingCart2Line />
              </Link>
              <Link to="/profile" className="text-[#96712a] text-4xl">
                <RiUser3Line />
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="text-[#96712a] border border-[#96712a] px-4 py-1 rounded-full font-semibold hover:bg-[#96712a] hover:text-white transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
