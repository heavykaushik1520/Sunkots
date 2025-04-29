const SecondBannerSection = ({ parallax }) => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden second-section-style px-4 sm:px-8">
      {/* Top Left Beans */}
      <img
        src="/images/main/beans.png"
        alt="Beans"
        className="absolute top-4 left-10 sm:left-12 md:left-16 lg:left-50 w-16 sm:w-24 md:w-28 lg:w-36"
      />

      {/* Heading */}
      <h1
        className="relative z-10 text-[#5c4033] text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-10 md:mt-12 text-center"
        style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
      >
        Start Your Morning
      </h1>

      {/* Arrow - slightly shifted right */}
      <img
        src="/images/main/arrow3.png"
        alt="Arrow"
        className="hidden absolute sm:block mt-2 sm:mt-4 w-8 md:w-24 lg:w-20"
        style={{
          top: "25%",
          left: "65%", // shifted from 60% to 62%
          transform: `translate(${parallax.x}px, ${parallax.y}px) rotate(0deg)`,
        }}
      />

      {/* Cup - nudged right using left margin */}
      {/* <div className="relative mt-4 sm:mt-8 md:mt-20 lg:mb-40 flex justify-center ml-40"> */}
      {/* <div className="relative mt-2 sm:mt-4 md:mt-8 lg:mb-40 flex justify-center ml-0 sm:ml-0 md:ml-0 lg:ml-40"> */}
      <div className="relative mt-1 sm:mt-1 md:mt-1 lg:mb-40 flex justify-center ml-0 sm:ml-0 md:ml-0 lg:ml-40">

        <img
          src="/images/main/cup1.png"
          alt="Cup"
          className="w-70 sm:w-52 md:w-120"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        />
      </div>

      {/* Bottom Right Beans */}
      <img
        src="/images/main/beans2.png"
        alt="Beans2"
        className="hidden sm:block absolute bottom-20 right-40 w-16 md:w-28 lg:w-80"
      />
    </div>
  );
};

export default SecondBannerSection;
