import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MenuList from "./components/menu/MenuList";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Infrastructure from "./components/infrastructure/Infrastructure";
import EatItToBelieveItSection from "./components/banner/EatItToBelieveItSection";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Menu/> */}
        {/* <About/>*/}
        {/* <Testimonial/> */}
        {/* <Infrastructure/>  */}
        {/* <Footer /> */}

        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
