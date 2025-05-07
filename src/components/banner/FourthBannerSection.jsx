const FourthBannerSection = ({ parallax }) => {
    return (
      <div className="third-banner-section relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 sm:px-8 py-6 sm:py-12 mb-16 md:mb-0">
        
        {/* Text Section */}
        <div
          className="text-center md:text-left max-w-xl z-20 md:-mt-4"
          // style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            Available at Reputed Retailers
          </h1>
          <p className="text-[#96712a] text-base sm:text-lg md:text-xl">
            Our bakery products adorn the shelves of iconic stores in and around Mumbai, such as Reliance Retail Ltd., Prashant Corner, Ramanlal VithalDas, among others.
          </p>
        </div>
  
        {/* Image Section */}
        <div className="relative mt-6 sm:mt-0">
          <img
            src="images/main/stack.png"
            alt="Cup"
            className="w-66 sm:w-56 md:w-72 lg:w-96 xl:w-[550px] transform translate-x-[-10px] sm:translate-x-[-20px]"
            style={{
              transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
            }}
          />
  
          {/* Arrow to the left of the image pointing toward the text */}
          {/* <img
            src="images/main/arrow3.png"
            alt="Arrow"
            className="hidden md:block absolute top-[70%] -left-15 transform -translate-y-1/2 rotate-[100deg] w-10"
          /> */}
        </div>
      </div>
    );
  };
  
  export default FourthBannerSection;
  