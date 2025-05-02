import React, { useState, useEffect, useRef } from 'react';
import './EatItToBelieveItSection.css'; // external CSS

const EatItToBelieveItSection = () => {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false); // Reset when not in view
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="eat-section">
      <div className="container">
        <div ref={textRef} className={`text-wrapper ${isInView ? 'slide-up' : ''}`}>
          <h2 className="title  text-[#96712a]">EAT IT TO BELIEVE IT!</h2>
          <p className="description  text-[#96712a]">
            Marketed under the brand name soTrue, we make a wide range of
            flavourful baked edibles that are appreciated by every member in the
            family.
            <br /><br />
            Known for their rich nutritional content and exceptional taste, our
            product range is ideal for a diverse array of recipes and caters to a
            broad taste palate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EatItToBelieveItSection;
