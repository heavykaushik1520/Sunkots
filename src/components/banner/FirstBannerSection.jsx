import "./FirstBannerSection.css";

const FirstBannerSection = ({ parallax }) => {
  return (
    <div className="first-section-style relative w-full flex items-center justify-center px-4 sm:px-6 custom-section-height">
      {/* Main Content Wrapper */}
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-6xl w-full flex-wrap sm:flex-nowrap justify-center">
        {/* Text Section */}
        <h1
          className="cursive-heading text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-[#21140f] max-w-xs sm:max-w-sm lg:max-w-md leading-snug text-center sm:text-left"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          }}
        >
          Freshly Brewed <br /> Coffee to Brighten <br /> Your Day
        </h1>

        {/* Arrow1 */}
        <img
          src="/images/main/arrow1.png"
          alt="Arrow1"
          className="hidden sm:block w-14 md:w-20 lg:w-24"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          }}
        />

        {/* Cup with Arrow2 overlayed */}
        <div className="relative mt-6 sm:mt-0">
          <img
            src="/images/main/cup2.png"
            alt="Cup"
            className="w-36 sm:w-56 md:w-72 lg:w-96 transform translate-x-[-10px] sm:translate-x-[-20px]"
            style={{
              transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
            }}
          />
          {/* Arrow2 near cup bottom */}
          <img
            src="/images/main/arrow2.png"
            alt="Arrow2"
            className="arrow2-position hidden sm:block w-6 sm:w-8 md:w-10 lg:w-12"
            style={{
              transform: `translate(${parallax.x}px, ${parallax.y}px)`,
            }}
          />
        </div>
      </div>

      {/* Beans Image - Bottom Right */}
      <img
        src="/images/main/beans.png"
        alt="Beans"
        className="absolute bottom-4 right-4 w-16 sm:w-20 md:w-28 lg:w-36"
      />
    </div>
  );
};

export default FirstBannerSection;
