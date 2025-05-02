import React from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { FaGooglePlusG, FaInstagram, FaSkype } from "react-icons/fa";
import "./Footer.css"; // Import your fixed CSS
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-between">
        {/* Top Content */}
        <div className="top-content">
          {/* Logo */}
          <div className="logo-and-description mb-6">
            <p className="text-2 font-bold text-[#fff] max-w-md">
              Morbi sed justo felis. Phasellus condimentum ornare maximus. Nulla
              convallis tortor pellentesque tortor vulputate, eget bibendum nibh
              interdum.
            </p>
          </div>

          {/* Contact Info */}
          <div className="contact-info text-2 font-bold text-[#fff] mb-6 text-sm flex flex-wrap justify-center gap-8">
            <div className="address text-center">
              <p>Chicago, IL 60606</p>
              <p>123, New Lenox</p>
            </div>
            <div className="phone-fax text-center">
              <p className="mt-4 sm:mt-0">Phone: 888-456-7890</p>
              <p>Fax: 889-098-7654</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-icons flex justify-center gap-6 mb-6">
            <Link to="//" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link to="//" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link to="//" aria-label="Google Plus" className="hover:text-red-500">
              <FaGooglePlusG className="h-6 w-6" />
            </Link>
            <Link to="/" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </Link>
            
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bottom-content text-3xl  text-[#fff]">
          Sunkots © 2015 All Copyrights Reserved | Terms of Use | Privacy Policy
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-[#017043] hover:bg-[#294439] text-white rounded-full p-3"
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
