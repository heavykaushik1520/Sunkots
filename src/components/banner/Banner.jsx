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
            style={{ backgroundImage: "url('/images/main/background.jpg')" }}
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

          <h2 className="text-2xl sm:text-3xl font-semibold text-[#5c4033] mb-2 font-playfair">
            Explore | Order | Enjoy
          </h2>
          <p className="text-[#4a3b2c] text-base sm:text-lg mb-6 font-playfair">
            Check out our wide selection of bakery delights.
          </p>
          <button className="bg-[#5c4033] hover:bg-[#4a362d] text-white px-6 py-2 rounded-full transition duration-300 font-semibold">
            ADD TO CART
          </button>

          <div className="flex justify-center mt-10">
            <div className="h-[2px] bg-[#5c4033] animate-expand-line"></div>
          </div>
        </div>
      </section>

      <Delight />
      <Testimonial/>

      <div className="flex justify-center mt-10">
        <div className="h-[2px] bg-[#5c4033] animate-expand-line"></div>
      </div>
      <section
        ref={sectionRef}
        className="py-12 px-4 sm:px-8 bg-white text-center overflow-hidden"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#5c4033] font-playfair mb-4 transition-transform duration-1000 ${
              inView ? "slide-down" : "opacity-0 translate-y-[-50px]"
            }`}
          >
            Baking Excellence, Since 2018
          </h2>
          <p
            className={`text-[#4a3b2c] text-base sm:text-lg font-playfair transition-transform duration-1000 delay-300 ${
              inView ? "slide-up" : "opacity-0 translate-y-[50px]"
            }`}
          >
            Standing on the strong pillars of Taste, Purity, and Customer
            Delight, Sunkots has set new standards of excellence in the bakery
            industry. Appreciated for their tempting flavours and crunchiness,
            our baked delicacies have been tempting Mumbaikars in growing
            numbers.
          </p>
        </div>
      </section>
    </>
  );
};
export default Banner;
