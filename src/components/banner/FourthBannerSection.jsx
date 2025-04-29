const FourthBannerSection = ({ parallax }) => {
    return (
      <div className="third-banner-section relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 sm:px-8 py-6 sm:py-12 mb-16 md:mb-0">
        
        {/* Text Section */}
        <div
          className="text-center md:text-left max-w-xl z-20 md:-mt-4"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          <h2 className="text-[#5c4033] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Available at Reputed Retailers
          </h2>
          <p className="text-[#4a3b2c] text-base sm:text-lg md:text-xl">
            Our bakery products adorn the shelves of iconic stores in and around Mumbai, such as Reliance Retail Ltd., Prashant Corner, Ramanlal VithalDas, among others.
          </p>
        </div>
  
        {/* Image Section */}
        <div
          className="relative w-full md:w-1/2 max-w-md md:max-w-lg md:mt-4 md:mb-2"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          <img
            src="/images/main/3000x2000.png"
            alt="Retail Availability"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
  
          {/* Arrow to the left of the image pointing toward the text */}
          <img
            src="/images/main/arrow3.png"
            alt="Arrow"
            className="hidden md:block absolute top-[70%] -left-15 transform -translate-y-1/2 rotate-[100deg] w-10"
          />
        </div>
      </div>
    );
  };
  
  export default FourthBannerSection;
  