/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";

function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  const hrRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // triggers when 50% of section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Line animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation when in view
          setAnimate(true);
        } else {
          // Reset animation when out of view so it can replay on next scroll
          setAnimate(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    if (hrRef.current) {
      observer.observe(hrRef.current);
    }

    return () => {
      if (hrRef.current) {
        observer.unobserve(hrRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="about-page">
        <div className="about-banner">
          <img
            src="images/about/top_bg_5.jpg"
            alt="about Banner"
            className="banner-image"
          />
          <div className="banner-text text-[#96712a]">
            <h1 className="text-[#96712a]">ABOUT US</h1>
            {/* <p className="text-[#96712a]">Home / About Us</p> */}
          </div>
        </div>
      </div>

      <section className="bg-white p-6 md:p-10 lg:p-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#96712a] tracking-wide mb-4">
          ‘Good Food Is the Secret to a Happy Life’
        </h1>

        <p className="text-sm md:text-base text-[#a4907c] max-w-prose mx-auto mt-15 mb-15">
          Inspired by this belief, CA Pravin Kothari and second-generation
          entrepreneur Raunak Kothari established SUNKOTS Healthy Food Private
          Limited in 2018. SUNKOTS is a leading processor and pan-India supplier
          of premium vegetarian bakery products. Driven by a single-minded
          pursuit of making quality edibles, we have been successful in touching
          the hearts and tempting the taste buds of Mumbaikars in a relatively
          short time span. The promoters' extensive expertise and commitment
          have enabled us to create a premium range of food products that adhere
          to global industry standards.
        </p>

        {/* <a href="#" class="btn-group">
          <span class="btn-shadow"></span>
          <span class="btn-main">Purchase</span>
        </a> */}
      </section>

      {/* Between sections */}
      <hr className="mx-20 border-t-2 border-[#017043] opacity-30 animated-line" />

      <section ref={sectionRef} className="bg-white p-6 md:p-10 lg:p-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <div
            className={`flex-1 text-center md:text-left mt-20 ${
              inView ? "animate-slide-in-left" : ""
            }`}
          >
            <h1 className="flex justify-center text-3xl md:text-4xl font-bold text-[#96712a] tracking-wider mb-4">
              Vision
            </h1>
            <p className="text-sm md:text-base text-[#96712a] max-w-prose mx-auto md:mx-0 mt-5 mb-5">
              Our vision is to be the premier bakery brand worldwide, renowned
              for our commitment to quality, creativity, and sustainability,
              delivering a symphony of taste and freshness to every corner of
              the globe.
            </p>
          </div>

          <div
            className={`flex-1 flex justify-center md:justify-end ${
              inView ? "animate-slide-in-right" : ""
            }`}
          >
            <img
              src="images/about/bread.jpg"
              alt="Vision Image"
              className="w-full max-w-md object-cover rounded-md shadow-md"
              style={{ maxHeight: "280px" }}
            />
          </div>
        </div>
      </section>

      <hr className="mx-20 border-t-2 border-[#017043] opacity-30 animated-line" />

      <section className="bg-gray-50 p-6 md:p-10 lg:p-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg floating-box">
            <h2 className="flex justify-center text-xl font-semibold mb-3 text-[#96702aed]">
              Quality Policy
            </h2>
            <p className="text-[#96712a] text-sm md:text-base leading-relaxed">
              At SUNKOTS, we are dedicated to providing our customers with the
              highest quality baked products. Our commitment to quality is at
              the core of our operations, and we strive to exceed customer
              expectations through continuous improvement and innovation.
            </p>
          </div>

          <div className="flex-1 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg floating-box">
            <h2 className="flex justify-center text-xl font-semibold mb-3 text-[#96712aed]">
              Future Focus
            </h2>
            <p className="text-[#96712a] text-sm md:text-base leading-relaxed">
              Excited by the huge success of our soTrue brand, we are now all
              set to introduce our Millet range, including Cookies, Breads,
              Lavash, and Savouries.
            </p>
          </div>
        </div>
      </section>

      {/* <hr className="mx-20 border-t-2 border-[#371e0c] opacity-30 animated-line" /> */}

      {/* <Footer/> */}

    </>
  );
}

export default About;
