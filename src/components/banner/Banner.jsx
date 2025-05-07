/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./Banner.css";
import EatItToBelieveItSection from "./EatItToBelieveItSection";
import Delight from "./Delight";
import CoffeeSection from "./CoffeeSection";

import FirstBannerSection from "./FirstBannerSection";
import SecondBannerSection from "./SecondBannerSection";
import ThirdBannerSection from "./ThirdBannerSection";
import FourthBannerSection from "./FourthBannerSection";
import Testimonial from "../testimonial/Testimonial";
import SomeMenu from "../menu/SomeMenu";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const sections = [
    <FirstBannerSection parallax={parallax} />,
    <SecondBannerSection parallax={parallax} />,
    <ThirdBannerSection parallax={parallax} />,
    <FourthBannerSection parallax={parallax} />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
      setProgress(0);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min((elapsed / 10000) * 100, 100);
      setProgress(percentage);
    }, 100);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 100;
    const y = (e.clientY / innerHeight - 0.5) * 100;
    setParallax({ x, y });
  };

  return (
    <>
      <section
        className="relative h-screen overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="banner-wrapper relative h-full w-full">
          <div
            className="banner-background"
            style={{ backgroundImage: "url('images/main/background.jpg')" }}
          ></div>
          <div className="banner-overlay"></div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Main content */}
          <div className="banner-content">{sections[currentIndex]}</div>
        </div>
      </section>
      <EatItToBelieveItSection />
      <CoffeeSection />

      {/* cart order  */}
      <section className="py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated horizontal line */}

          <h2 className="text-2xl sm:text-3xl font-semibold text-[#96712a] mb-2">
            Explore | Order | Enjoy
          </h2>
          <p className="text-[#96712a] text-base sm:text-lg mb-6">
            Check out our wide selection of bakery delights.
          </p>
          <SomeMenu />
          <Link to="/menu">
            {" "}
            {/* Replace "/menu" with the actual path to your MenuList */}
            <button className="bg-[#96712a] hover:bg-[#017043] text-white px-6 py-2 rounded-full transition duration-300 font-semibold">
              View More
            </button>
          </Link>
        </div>
      </section>
      <div className="flex justify-center mt-10">
        <div className="h-[2px] bg-[#017043] animate-expand-line"></div>
      </div>

      <Delight />
      <div className="flex justify-center mt-10">
        <div className="h-[2px] bg-[#017043] animate-expand-line"></div>
      </div>
      <Testimonial />

      
      
    </>
  );
};
export default Banner;
