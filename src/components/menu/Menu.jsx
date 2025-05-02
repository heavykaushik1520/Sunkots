import React from "react";
// import "./Menu.css"; // Make sure to import your CSS
import MenuList from "./MenuList";
import Footer from "../footer/Footer";

const Menu = () => {
  return (
    <>
      {/* <div className="menu-page">
      <div className="menu-banner">
        <img
          src="images/menu/top_bg_7.jpg"
          alt="Menu Banner"
          className="banner-image"
        />
        <div className="banner-text">
          <h1 className='text-[#96712a]'>OUR DELICACIES</h1>
         
        </div>
      </div>
    </div> */}
      
      <MenuList />
    </>
  );
};

export default Menu;
