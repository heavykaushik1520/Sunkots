/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import { useEffect, useRef, useState } from "react";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

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

      <section className="bg-white px-4 py-10 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Image on Left with reduced width */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-5/12"
          >
            <img
              src="images/about/p3.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </motion.div>

          {/* Text on Right with increased width */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full md:w-7/12 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#96712a] tracking-wide mb-4">
              ‘Good Food Is the Secret to a Happy Life’
            </h1>
            <p className="text-sm md:text-base text-[#977655]">
              Inspired by this belief, CA Pravin Kothari and second-generation
              entrepreneur Raunak Kothari established SUNKOTS Healthy Food
              Private Limited in 2018. SUNKOTS is a leading processor and
              pan-India supplier of premium vegetarian bakery products. Driven
              by a single-minded pursuit of making quality edibles, we have been
              successful in touching the hearts and tempting the taste buds of
              Mumbaikars in a relatively short time span. The promoters'
              extensive expertise and commitment have enabled us to create a
              premium range of food products that adhere to global industry
              standards.
            </p>
          </motion.div>
        </div>
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
              src="images/about/p2.jpg"
              alt="Vision Image"
              className="w-full max-w-md object-cover rounded-md shadow-md"
              style={{ maxHeight: "280px" }}
            />
          </div>
        </div>
      </section>

      <hr className="mx-20 border-t-2 border-[#017043] opacity-30 animated-line" />

      <section className="bg-white px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#96712a] tracking-wide mb-6 uppercase">
            What Sets Us Apart?
          </h2>
          <p className="text-sm md:text-base text-[#977655] leading-relaxed">
            The promoters' extensive expertise and commitment have enabled us to
            create a premium range of food products that adhere to global
            industry standards.
          </p>
          <p className="text-sm md:text-base text-[#977655] leading-relaxed mt-4">
            Our products are baked under the highest hygiene protocols in the
            food industry, using cutting-edge, advanced technology. Known for
            their rich nutritional content and exceptional taste, our product
            range is ideal for a diverse array of recipes and caters to a broad
            audience.
          </p>
        </div>
      </section>

      <hr className="mx-20 border-t-2 border-[#017043] opacity-30 animated-line" />

      <section className="bg-gray-50 p-6 md:p-10 lg:p-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg floating-box">
            <h2 className="flex justify-center text-xl font-semibold mb-3 text-[#96712a]">
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
            <h2 className="flex justify-center text-xl font-semibold mb-3 text-[#96712a]">
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
