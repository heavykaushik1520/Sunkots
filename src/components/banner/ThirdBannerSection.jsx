const ThirdBannerSection = ({ parallax }) => {
  return (
    <div className="third-banner-section relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 sm:px-8 py-6 sm:py-12 mb-16 md:mb-50">
      
      {/* Text Section */}
      <div
        className="text-center md:text-left max-w-xl z-20 md:-mt-4"
        // style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          Holding Hygiene Close to Our Heart
        </h1>
        <p className="text-[#96712a] text-base sm:text-lg md:text-xl">
          Adhering to the highest hygiene protocols, we make premium quality products in our clean and well-maintained production facility.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative sm:mt-0">
          <img
            src="images/main/stack.png"
            alt="Cup"
            className="w-66 sm:w-56 md:w-72 lg:w-96 xl:w-[550px] transform translate-x-[-10px] sm:translate-x-[-20px]"
            style={{
              transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
            }}
          />

       
      </div>
    </div>
  );
};

export default ThirdBannerSection;
