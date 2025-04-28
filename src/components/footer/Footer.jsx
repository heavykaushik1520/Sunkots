import React from "react";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import { FaGooglePlusG, FaInstagram, FaSkype } from "react-icons/fa";
import "./Footer.css"; // Import your fixed CSS

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container mx-auto px-4 flex flex-col items-center text-center h-full justify-between">
        {/* Top Content */}
        <div className="top-content">
          {/* Logo */}
          <div className="logo-and-description mb-6">
            <div className="mb-4">
              <img
                src="/images/footer/logo_footer.png"
                alt="Hot Coffee Logo"
                className="mx-auto h-18 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Morbi sed justo felis. Phasellus condimentum ornare maximus. Nulla
              convallis tortor pellentesque tortor vulputate, eget bibendum nibh
              interdum.
            </p>
          </div>

          {/* Contact Info */}
          <div className="contact-info text-gray-300 mb-6 text-sm flex flex-wrap justify-center gap-8">
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
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Google Plus" className="hover:text-red-500">
              <FaGooglePlusG className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-800">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Skype" className="hover:text-blue-400">
              <FaSkype className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bottom-content text-xs text-gray-500">
          ThemeRex © 2015 All Rights Reserved | Terms of Use | Privacy Policy
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3"
        aria-label="Back to Top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
