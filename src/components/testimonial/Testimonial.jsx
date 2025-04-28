/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Testimonial.css";

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      message:
        "I simply adore this theme and nice, lightweight design. Thank you for the professional support and regular updates!",
      name: "Lily Hunter",
      role: "Publisher",
      img: "/images/testimonial/2000x2000.png", // Replace with your real images
    },
    {
      message:
        "Who doesn't like a nice cup of coffee? Here you can find everything to spend quality time with a drink and dessert.",
      name: "John Doe",
      role: "Photographer",
      img: "/images/testimonial/2000x2000.png",
    },
    {
      message:
        "With this wonderful theme your website becomes a guarantee for a successful business, café, bakery or a restaurant.",
      name: "Emma Jones",
      role: "Public Relations",
      img: "/images/testimonial/2000x2000.png",
    },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <>
      <div className="testimonial-page">
        <div className="testimonial-banner">
          <img
            src="/images/testimonial/top_bg_1.jpg"
            alt="about Banner"
            className="banner-image"
          />
          <div className="banner-text">
            <h1>TESTIMONIALS</h1>

            <p className="mt-6 text-4xl max-w-2xl mx-auto md:text-xl font-semibold text-[#1d0f05] leading-relaxed">
              Once a Sunkots customer, always a Sunkots customer! Read what some
              of our loyal consumers and retailers say about us.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 md:px-16 bg-cover bg-center bg-no-repeat">
        <h2 className="text-center text-2xl md:text-4xl font-bold tracking-widest text-[#1f1205] mb-10 uppercase">
          Happy Customers
        </h2>

        <div
          className="max-w-xl mx-auto mb-10 flex flex-col items-center text-center
               border border-[#2d1b0c] rounded-lg p-8
               min-h-[320px]"
        >
          <p className="text-[#2d1b0c]  text-base md:text-lg mb-6 leading-relaxed">
            {testimonials[current].message}
          </p>

          <div className="flex items-center gap-4 mb-2">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <h3 className="font-bold text-[#2d1b0c] uppercase text-lg">
              {testimonials[current].name}
            </h3>
          </div>

          <p className="text-sm text-gray-600 mt-1 tracking-wider">
            {testimonials[current].role}
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            className="border-2 border-[#3a2d20] text-[#3a2d20] bg-white px-4 py-2 rounded-md hover:bg-[#3a2d20] hover:text-white transition-all duration-300"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="border-2 border-[#3a2d20] text-[#3a2d20] bg-white px-4 py-2 rounded-md hover:bg-[#3a2d20] hover:text-white transition-all duration-300"
          >
            &#8250;
          </button>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
