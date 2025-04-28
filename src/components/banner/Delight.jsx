import React, { useState, useEffect, useRef } from 'react';
import './Delight.css'; // external CSS

function Delight() {
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
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
    <section className="delight-section">
      <div className="container">
        <div ref={textRef} className={`text-wrapper ${isInView ? 'slide-up' : ''}`}>
          <h2 className="title font-playfair">Delight in Every Bite - Our Quality Promise</h2>
          <p className="description font-playfair">
            Our products are meticulously crafted using the finest ingredients,
            carefully selected from trusted vendors, ensuring unparalleled quality,
            consistent richness, and exceptional flavour.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Delight;
