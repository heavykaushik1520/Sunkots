/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";

function Infrastructure() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    const el = document.getElementById("bakery-section");
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting); // true when in viewport, false when out
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("bakery-section");
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const points = [
    "Our production facility, spanning 15,500 SQF in Bhiwandi, Mumbai, is designed with strict hygiene standards",
    "We source only the highest quality raw materials, with each ingredient carefully selected after thorough analysis. Hygiene is integrated into the equipment from the outset of the food manufacturing process",
    "Every production stage is meticulously crafted to maintain the integrity of the product. Additionally, the packaging materials and processes are chosen to enhance shelf life, prevent microbial contamination, and preserve product quality at the highest level",
  ];
  return (
    <>
      <div className="about-page">
        <div className="about-banner">
          <img
            src="/images/about/top_bg_5.jpg"
            alt="about Banner"
            className="banner-image"
          />
          <div className="banner-text tracking-normal !text-[#5c4033]">
            <h1 className="tracking-normal">INFRASTRUCTURE</h1>
          </div>
        </div>
      </div>

      <section
        id="bakery-section"
        className="max-w-6xl mx-auto px-6 md:px-12 py-16 bg-gradient-to-b  rounded-3xl shadow-lg relative overflow-hidden"
      >
        {/* Soft animated background shapes */}
        <div className="absolute top-0 left-0 w-40 h-40  rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56  rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-1000"></div>

        <h2
          className={`text-3xl md:text-5xl font-extrabold text-[#5c4033] mb-10 uppercase tracking-wide
          transition-transform duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          An Integrated, Modern Bakery Plant
        </h2>

        <p
          className={`text-[#5c4033c9] text-lg md:text-xl max-w-3xl mb-12 leading-relaxed
          transition-opacity duration-700 ease-out delay-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Our products are baked under the highest hygiene protocols in the food
          industry, using cutting-edge technology and world class processes:
        </p>

        <ul className="space-y-8 max-w-3xl mx-auto text-[#5c4033c9]">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-4 text-lg md:text-xl leading-snug hover:text-[#2d1b0b]"
              style={{
                transitionProperty: "transform, opacity",
                transitionDuration: "700ms",
                transitionTimingFunction: "ease-out",
                transitionDelay: `${400 + i * 200}ms`,
                transform: visible ? "translateX(0)" : "translateX(50px)",
                opacity: visible ? 1 : 0,
              }}
            >
              <GiCoffeeCup
                className="flex-shrink-0 text-[#2d1b0b] shadow-lg hover:scale-125 transition-transform duration-300 mt-1"
                size={28}
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Infrastructure;
