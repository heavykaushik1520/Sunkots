const SecondBannerSection = ({ parallax }) => {
  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden second-section-style px-4 sm:px-8">
      {/* Top Left Beans */}
      {/* <img
        src="images/main/beans.png"
        alt="Beans"
        className="absolute top-4 left-10 sm:left-12 md:left-16 lg:left-50 w-16 sm:w-24 md:w-28 lg:w-36"
      /> */}

      {/* Heading */}
      <div className="text-center md:text-left max-w-xl z-20 mt-32 md:mt-60">
        <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          ONE FOR EVERYONE
        </h1>
        <p className="text-[#96702ae1] text-base sm:text-lg md:text-xl">
          Wheather you desire a quick tea-time snack or a crispy nibble, take
          your pick from our wide range of baked delicacies
        </p>
      </div>

      <div className="relative mt-4 md:mt-6 flex justify-center lg:mb-40 lg:ml-40">
        <img
          src="images/main/bannera.png"
          alt="Cup"
          className="w-70 sm:w-52 md:w-120"
          style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        />
      </div>
    </div>
  );
};

export default SecondBannerSection;
