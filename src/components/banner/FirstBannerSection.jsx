import "./FirstBannerSection.css";

const FirstBannerSection = ({ parallax }) => {
  return (
    <div className="first-section-style relative w-full flex items-center justify-center px-4 sm:px-6 custom-section-height">
      {/* Main Content Wrapper */}
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-6xl w-full flex-wrap sm:flex-nowrap justify-center">
        {/* <h1
          className="cursive-heading text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-[#96712a] max-w-xs sm:max-w-sm lg:max-w-md leading-snug text-center sm:text-left"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          }}
        >
          Freshly Brewed <br /> Coffee to Brighten <br /> Your Day
        </h1> */}

        <div
          className=" text-center md:text-left max-w-xl z-20 md:-mt-4"
          // style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
        >
          <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            A Great Way To Start Your Day
          </h1>
          <p className="text-[#96702ae1] text-base sm:text-lg md:text-xl">
            Enjoy our mely-in-the-mouth, freshly baked delicacies where each
            bite is loaded taste and purity.
          </p>
        </div>

        {/* Arrow1 */}
        <img
          src="images/main/arrow1.png"
          alt="Arrow1"
          className="hidden sm:block w-14 md:w-20 lg:w-24"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          }}
        />

        {/* Cup with Arrow2 overlayed */}
        <div className="relative mt-6 sm:mt-0">
          <img
            src="images/main/stack.png"
            alt="Cup"
            className="w-66 sm:w-56 md:w-72 lg:w-96 xl:w-[1500px] transform translate-x-[-10px] sm:translate-x-[-20px]"
            style={{
              transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
            }}
          />
          {/* Arrow2 near cup bottom */}
          {/* <img
            src="images/main/arrow2.png"
            alt="Arrow2"
            className="arrow2-position hidden sm:block w-6 sm:w-8 md:w-10 lg:w-12"
            style={{
              transform: `translate(${parallax.x}px, ${parallax.y}px)`,
            }}
          /> */}
        </div>
      </div>

      {/* Beans Image - Bottom Right */}
      {/* <img
        src="images/main/beans.png"
        alt="Beans"
        className="absolute bottom-4 right-4 w-16 sm:w-20 md:w-28 lg:w-36"
      /> */}
    </div>
  );
};

export default FirstBannerSection;
