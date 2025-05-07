import React, { useEffect, useRef } from "react";
import "./CoffeeSection.css";

function CoffeeSection() {
  const cupRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const cup = cupRef.current;

      if (cup) {
        // Parallax depth control
        const translateY = Math.min(scrollY * 0.2, 50); // max 50px vertical
        const translateX = Math.min(scrollY * 0.05, 20); // optional small horizontal shift
        cup.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-8 overflow-hidden"
      style={{ backgroundImage: "url('images/main/bg_home_paralax.jpg')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-16">
        {/* Cup Image with parallax */}
        <div className="relative flex-shrink-0 lg:hidden">
          <img
            ref={cupRef}
            src="images/main/stack.png"
            alt="Coffee Cup"
            className="w-[250px] md:w-[400px] lg:w-[500px] transition-transform duration-300 ease-out"
          />
        </div>

        {/* Laptop View: hidden on small screens, visible on lg and above */}
        <div className="relative flex-shrink-0 hidden lg:block">
          <img
            ref={cupRef}
            src="images/main/stack.png"
            alt="Coffee Cup"
            className="w-[500px] transition-transform duration-300 ease-out mb-45"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#96712a] leading-tight mb-4 ">
            Baking Excellence,
            <br />
            Since 2018
          </h1>
          <p className="text-[#96712a] text-base md:text-lg mb-6">
            Standing on the strong pillars of Taste, Purity, and Customer
            Delight, Sunkots has set new standards of excellence in the bakery
            industry. Appreciated for their tempting flavours and crunchiness,
            our baked delicacies have been tempting Mumbaikars in growing
            numbers.
          </p>
          {/* <button className="text-base md:text-lg font-semibold underline decoration-[#96712a] text-[#96712a] hover:text-[#96712a] transition">
            Read more...
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default CoffeeSection;
