// import "./FirstBannerSection.css";

// const FirstBannerSection = ({ parallax }) => {
//   return (
//     <div className="first-section-style relative w-full flex items-center justify-center px-4 sm:px-6 custom-section-height">
//       {/* Main Content Wrapper */}
//       <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-6xl w-full flex-wrap sm:flex-nowrap justify-center">
//         <div
//           className=" text-center md:text-left max-w-xl z-20 md:-mt-4"
//           // style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)` }}
//         >
//           <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
//             A Great Way To Start Your Day
//           </h1>
//           <p className="text-[#96702ae1] text-base sm:text-lg md:text-xl">
//             Enjoy our mely-in-the-mouth, freshly baked delicacies where each
//             bite is loaded taste and purity.
//           </p>
//         </div>

//         {/* Arrow1 */}
//         <img
//           src="images/main/arrow1.png"
//           alt="Arrow1"
//           className="hidden sm:block w-14 md:w-20 lg:w-24"
//           style={{
//             transform: `translate(${parallax.x}px, ${parallax.y}px)`,
//           }}
//         />

//         {/* Cup with Arrow2 overlayed */}
//         <div className="relative mt-6 sm:mt-0">
//           <img
//             src="images/main/stack.png"
//             alt="Cup"
//             className="w-66 sm:w-56 md:w-72 lg:w-96 xl:w-[1500px] transform translate-x-[-10px] sm:translate-x-[-20px]"
//             style={{
//               transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FirstBannerSection;


import { useEffect, useState } from "react";
import "./FirstBannerSection.css";

const FirstBannerSection = ({ parallax }) => {
  const [banner, setBanner] = useState({
    heading: "",
    paragraph: "",
    imageUrl: "",
  });

 useEffect(() => {
  fetch("https://artiststation.co.in/sunkots-backend/api/banner") // correct backend port
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        setBanner(data.data);
      }
    })
    .catch((err) => console.error("Error fetching banner:", err));
}, []);

  return (
    <div className="first-section-style relative w-full flex items-center justify-center px-4 sm:px-6 custom-section-height">
      <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-20 max-w-6xl w-full flex-wrap sm:flex-nowrap justify-center">
        <div className="text-center md:text-left max-w-xl z-20 md:-mt-4">
          <h1 className="text-[#96712a] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
            {banner.heading}
          </h1>
          <p className="text-[#96702ae1] text-base sm:text-lg md:text-xl">
            {banner.paragraph}
          </p>
        </div>

        <img
          src="images/main/arrow1.png"
          alt="Arrow1"
          className="hidden sm:block w-14 md:w-20 lg:w-24"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          }}
        />

        <div className="relative mt-6 sm:mt-0">
          <img
            src={banner.imageUrl}
            alt="Banner Visual"
            className="w-66 sm:w-56 md:w-72 lg:w-96 xl:w-[1500px] transform translate-x-[-10px] sm:translate-x-[-20px]"
            style={{
              transform: `translate(calc(${parallax.x}px - 10px), ${parallax.y}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstBannerSection;
