import React, { useEffect, useState } from 'react';
import './CoffeeSection.css';

function CoffeeSection() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Limit cup movement maximum up to 50px
  const cupTranslateY = Math.min(offsetY * 0.1, 50);

  return (
    <section 
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-8 overflow-hidden"
      style={{ backgroundImage: "url('/images/main/bg_home_paralax.jpg')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-16">
        {/* Cup Image */}
        <div className="relative flex-shrink-0">
          <img 
            src="/images/main/cup1.png" 
            alt="Coffee Cup" 
            className="w-[250px] md:w-[400px] lg:w-[500px] cup-parallax"
            style={{ transform: `translateY(${cupTranslateY}px)` }}
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight mb-4 font-cursive">
            Baking Excellence,<br />Since 2018
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6 font-playfair">
            Standing on the strong pillars of Taste, Purity, and Customer Delight, 
            Sunkots has set new standards of excellence in the bakery industry. 
            Appreciated for their tempting flavours and crunchiness, our baked 
            delicacies have been tempting Mumbaikars in growing numbers.
          </p>
          <button className="text-base md:text-lg font-semibold underline decoration-gray-700 text-gray-800 hover:text-gray-600 transition">
            Read more...
          </button>
        </div>
      </div>
    </section>
  );
}

export default CoffeeSection;
