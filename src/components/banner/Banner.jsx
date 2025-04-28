

import React, { useEffect, useState } from "react";
import "./Banner.css";
import EatItToBelieveItSection from './EatItToBelieveItSection'
import Delight from "./Delight";
import CoffeeSection from "./CoffeeSection";


const sections = [
  {
    cup: "/images/main/cup1.png",
    text: "Freshly Brewed Coffee",
    arrow: "/images/main/arrow1.png",
  },
  {
    cup: "/images/main/cup2.png",
    text: "Start Your Morning",
    arrow: "/images/main/arrow2.png",
  },
  {
    text: "Relax and Enjoy",
    arrow: "/images/main/3000x2000.png",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

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
          {/* Background */}
          <div
            className="banner-background"
            style={{ backgroundImage: "url('/images/main/background.jpg')" }}
          ></div>

          {/* Overlay */}
          <div className="banner-overlay"></div>

          {/* Progress bar */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Beans image */}
          <img
            src="/images/main/beans.png"
            alt="Beans"
            className="beans-image"
          />

          {/* Main Content */}
          <div className="banner-content">
            {sections[currentIndex].cup && (
              <img
                src={sections[currentIndex].cup}
                alt="Cup"
                className="mb-6 w-48"
                style={{
                  transform: `translate(${parallax.x}px, ${parallax.y}px)`,
                }}
              />
            )}
            <h1
              style={{
                transform: `translate(${parallax.x}px, ${parallax.y}px)`,
              }}
            >
              {sections[currentIndex].text}
            </h1>
            <img
              src={sections[currentIndex].arrow}
              alt="Arrow"
              className="w-16 mt-4"
              style={{
                transform: `translate(${parallax.x}px, ${parallax.y}px)`,
              }}
            />
          </div>
        </div>
      </section>

      <EatItToBelieveItSection/>
      <CoffeeSection/>
      <Delight/>
    </>
  );
};

export default Banner;
