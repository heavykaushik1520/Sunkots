/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import React, { useState } from "react";
// import "./MenuList.css"; // Custom CSS if needed
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const categories = ["SAVOURIES", "SWEETS", "HEALTHY"];

// const menuItems = [
//   {
//     id: 1,
//     image: "images/menu/product/khari-Photoroom.png",
//     name: "Mini Khari",
//     description:
//       "Lovingly handcrafted, our artisanal and crispy Mini Khari makes for a good tea time snack.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 2,
//     image: "images/menu/product/bomb_kh.png",
//     name: "Bombay Khari",
//     description:
//       "Big and flaky, with thin delicate layers, our Bombay Khari is a favourite breakfast item.",
//     price: "₹140/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 3,
//     image: "images/menu/product/at_kh.png",
//     name: "Atta Khari",
//     description:
//       "Light and delectable, the goodness of whole wheat flour gives it a nourishing touch.",
//     price: "₹90/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 4,
//     image: "images/menu/product/maskaa_kharii.png",
//     name: "Maska Khari",
//     description:
//       "Crunchy and super soft, our maska khari is most loved Khari Variety.",
//     price: "₹80/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 5,
//     image: "images/menu/product/shakkar_khari.png",
//     name: "Shakkar Khari",
//     description:
//       "If you have a sweet cravings, our shakkar khari, with its crystal of sugar, make it yummier.",
//     price: "₹95/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 6,
//     image: "images/menu/product/but_baby_garlic.png",
//     name: "Butter Garlic Baby Rusk",
//     description:
//       "Each bite of this buttery treat gives you crunchy and spicy delight.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 7,
//     image: "images/menu/product/herb_butter_baby_rusk.png",
//     name: "Herb Butter Baby Rusk",
//     description:
//       "Embellished with select herbs, this yummy delight comes with a healthy twist.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 8,
//     image: "images/menu/product/rusk-Photoroom.png",
//     name: "Milk Baby Rusk",
//     description:
//       "Crispy and light, our bite-sized rusks make for superb tea time snacks.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 9,
//     image: "images/menu/product/gud_wheat.png",
//     name: "Gudwheat Cookies",
//     description:
//       "These sugar-free, preservative-less cookies with zero transfat (no maida) indeed make for healthy treat.",
//     price: "₹135/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 10,
//     image: "images/menu/product/choco_wheat.png",
//     name: "Choco Wheat Cookies",
//     description:
//       "A pure chocolaty indulgence with no maida, these cookies are much loved by kids.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 11,
//     image: "images/menu/product/shahi_jeera.png",
//     name: "Shahi Jeera Cookies",
//     description:
//       "The titillating aroma of roasted jeera makes these cookies a hit with everyone in the family.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
//   {
//     id: 12,
//     image: "images/menu/product/sticks-Photoroom.png",
//     name: "Ajwain Sticks",
//     description:
//       "A liberal sprinkling of ajwain gives this edible a splendid spicy twist.",
//     price: "₹110/-",
//     category: "DESSERTS",
//   },
// ];

// // Helper to shuffle array
// function shuffleArray(array) {
//   const shuffled = [...array];
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// }

// const headingVariants = {
//   initial: { y: -20, opacity: 0 },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
//   },
// };

// const categoryButtonVariants = {
//   initial: { opacity: 0, y: 10 },
//   animate: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeOut", delay: 0.1 * i },
//   }),
// };

// const itemVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut", delay: 0.15 * i },
//   }),
// };

// function MenuList() {
//   const [items, setItems] = useState(menuItems);
//   const [selectedCategory, setSelectedCategory] = useState("DESSERTS");
//   const [cartItems, setCartItems] = useState([]);

//   const handleAddToCart = (itemId) => {
//     if (!cartItems.includes(itemId)) {
//       setCartItems([...cartItems, itemId]);
//     }
//   };

//   const handleCategoryClick = (cat) => {
//     setSelectedCategory(cat);
//     setItems(shuffleArray(menuItems));
//   };

//   const handleViewCart = () => {
//     // You can open a modal or navigate to /cart page instead
//     console.log("Cart Items:", cartItems);
//   };

//   return (
//     <>
//       <section className="bg-white p-6 md:p-10 lg:p-20 text-center overflow-hidden">
//         <motion.h1
//           variants={headingVariants}
//           initial="initial"
//           animate="animate"
//           className="text-3xl md:text-5xl font-extrabold text-[#96712a] mt-10 uppercase tracking-wide flex justify-center"
//         >
//           OUR DELICACIES
//         </motion.h1>
//       </section>

//       <motion.div
//         className="flex flex-wrap justify-center gap-4 md:gap-8 mt-1/2 mb-8"
//         initial={{}}
//         animate={{}}
//       >
//         {categories.map((cat, index) => (
//           <motion.button
//             key={cat}
//             onClick={() => handleCategoryClick(cat)}
//             variants={categoryButtonVariants}
//             initial="initial"
//             animate="animate"
//             custom={index}
//             className={`text-base md:text-lg font-semibold px-4 py-1 rounded-full transition duration-300 ease-in-out ${
//               selectedCategory === cat
//                 ? "border-2 border-green-600 text-green-700 bg-green-50"
//                 : "border-2 border-transparent text-[#96712a] hover:border-green-600 hover:bg-green-50"
//             }`}
//           >
//             {cat}
//           </motion.button>
//         ))}
//       </motion.div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 mb-20">
//         {items.map((item, index) => (
//           <motion.div
//             key={item.id}
//             className="flex items-start gap-4 border-b pb-4 overflow-hidden"
//             variants={itemVariants}
//             initial="initial"
//             animate="animate"
//             custom={index}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-[90px] h-[90px] object-cover rounded-md shadow-sm"
//             />
//             <div className="flex-1 text-left">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-green-700 font-semibold text-md hover:text-[#7B3F00] transition duration-200 ">
//                   {item.name}
//                 </h3>
//                 <span className="text-green-600 font-bold">{item.price}</span>
//               </div>
//               <p className="text-[#96712a] text-sm">{item.description}</p>
//               <div className="mt-2 flex flex-col sm:flex-row gap-2">
//                 <button
//                   onClick={() => handleAddToCart(item.id)}
//                   className={`px-4 py-1 rounded-full text-sm font-semibold transition duration-300 ${
//                     cartItems.includes(item.id)
//                       ? "bg-green-600 text-white cursor-default"
//                       : "bg-green-100 text-green-700 hover:bg-green-600 hover:text-white"
//                   }`}
//                   disabled={cartItems.includes(item.id)}
//                 >
//                   {cartItems.includes(item.id) ? "Added" : "Add to Cart"}
//                 </button>

//                 <Link to="/cart"
//                   onClick={handleViewCart}
//                   className="px-4 py-1 rounded-full text-sm font-semibold bg-[#f5f5f5] text-[#96712a] border border-[#96712a] hover:bg-[#96712a] hover:text-white transition duration-300 text-center"
//                 >
//                   View Cart
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default MenuList;

import React, { useState } from "react";
import "./MenuList.css"; // Custom CSS if needed
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["SAVOURIES", "SWEETS", "HEALTHY"];

// Menu items array
const menuItems = [
  {
    id: 1,
    image: "images/menu/product/khari-Photoroom.png",
    name: "Mini Khari",
    description:
      "Lovingly handcrafted, our artisanal and crispy Mini Khari makes for a good tea time snack.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  // Add more items here...
  {
    id: 2,
    image: "images/menu/product/bomb_kh.png",
    name: "Bombay Khari",
    description:
      "Big and flaky, with thin delicate layers, our Bombay Khari is a favourite breakfast item.",
    price: "₹140/-",
    category: "DESSERTS",
  },
  {
    id: 3,
    image: "images/menu/product/at_kh.png",
    name: "Atta Khari",
    description:
      "Light and delectable, the goodness of whole wheat flour gives it a nourishing touch.",
    price: "₹90/-",
    category: "DESSERTS",
  },
  {
    id: 4,
    image: "images/menu/product/maskaa_kharii.png",
    name: "Maska Khari",
    description:
      "Crunchy and super soft, our maska khari is most loved Khari Variety.",
    price: "₹80/-",
    category: "DESSERTS",
  },
  {
    id: 5,
    image: "images/menu/product/shakkar_khari.png",
    name: "Shakkar Khari",
    description:
      "If you have a sweet cravings, our shakkar khari, with its crystal of sugar, make it yummier.",
    price: "₹95/-",
    category: "DESSERTS",
  },
  {
    id: 6,
    image: "images/menu/product/but_baby_garlic.png",
    name: "Butter Garlic Baby Rusk",
    description:
      "Each bite of this buttery treat gives you crunchy and spicy delight.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  {
    id: 7,
    image: "images/menu/product/herb_butter_baby_rusk.png",
    name: "Herb Butter Baby Rusk",
    description:
      "Embellished with select herbs, this yummy delight comes with a healthy twist.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  {
    id: 8,
    image: "images/menu/product/rusk-Photoroom.png",
    name: "Milk Baby Rusk",
    description:
      "Crispy and light, our bite-sized rusks make for superb tea time snacks.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  {
    id: 9,
    image: "images/menu/product/gud_wheat.png",
    name: "Gudwheat Cookies",
    description:
      "These sugar-free, preservative-less cookies with zero transfat (no maida) indeed make for healthy treat.",
    price: "₹135/-",
    category: "DESSERTS",
  },
  {
    id: 10,
    image: "images/menu/product/choco_wheat.png",
    name: "Choco Wheat Cookies",
    description:
      "A pure chocolaty indulgence with no maida, these cookies are much loved by kids.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  {
    id: 11,
    image: "images/menu/product/shahi_jeera.png",
    name: "Shahi Jeera Cookies",
    description:
      "The titillating aroma of roasted jeera makes these cookies a hit with everyone in the family.",
    price: "₹110/-",
    category: "DESSERTS",
  },
  {
    id: 12,
    image: "images/menu/product/sticks-Photoroom.png",
    name: "Ajwain Sticks",
    description:
      "A liberal sprinkling of ajwain gives this edible a splendid spicy twist.",
    price: "₹110/-",
    category: "DESSERTS",
  },
];

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const categoryButtonVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 * i },
  }),
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 * i },
  }),
};

function MenuList() {
  const [items, setItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState("DESSERTS");
  const [cartItems, setCartItems] = useState([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleAddToCart = (itemId) => {
    if (!cartItems.includes(itemId)) {
      setCartItems([...cartItems, itemId]);
    }
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    // Shuffle items if necessary
    setItems(menuItems); // You can shuffle if needed
  };

  const openImageModal = (image) => {
    setModalImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  return (
    <>
      <section className="bg-white p-6 md:p-10 lg:p-20 text-center overflow-hidden">
        <motion.h1
          variants={headingVariants}
          initial="initial"
          animate="animate"
          className="text-3xl md:text-5xl font-extrabold text-[#96712a] mt-1 uppercase tracking-wide flex justify-center"
        >
          OUR DELICACIES
        </motion.h1>
      </section>

      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-8 mt-1/2 mb-8"
        initial={{}}
        animate={{}}
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            variants={categoryButtonVariants}
            initial="initial"
            animate="animate"
            custom={index}
            className={`text-base md:text-lg font-semibold px-4 py-1 rounded-full transition duration-300 ease-in-out ${
              selectedCategory === cat
                ? "border-2 border-green-600 text-green-700 bg-green-50"
                : "border-2 border-transparent text-[#96712a] hover:border-green-600 hover:bg-green-50"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 mb-20">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-start gap-4 border-b pb-4 overflow-hidden"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            custom={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[90px] h-[90px] object-cover rounded-md shadow-sm cursor-pointer"
              onClick={() => openImageModal(item.image)}
            />
            <div className="flex-1 text-left">
              <div className="flex justify-between items-center">
                <h3 className="text-green-700 font-semibold text-md hover:text-[#7B3F00] transition duration-200">
                  {item.name}
                </h3>
                <span className="text-green-600 font-bold">{item.price}</span>
              </div>
              <p className="text-[#96712a] text-sm">{item.description}</p>
              <div className="mt-2 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className={`px-4 py-1 rounded-full text-sm font-semibold transition duration-300 ${
                    cartItems.includes(item.id)
                      ? "bg-green-600 text-white cursor-default"
                      : "bg-green-100 text-green-700 hover:bg-green-600 hover:text-white"
                  }`}
                  disabled={cartItems.includes(item.id)}
                >
                  {cartItems.includes(item.id) ? "Added" : "Add to Cart"}
                </button>

                <Link
                  to="/cart"
                  className="px-4 py-1 rounded-full text-sm font-semibold bg-[#f5f5f5] text-[#96712a] border border-[#96712a] hover:bg-[#96712a] hover:text-white transition duration-300 text-center"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Zoom Image */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-[#96712a]/90 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
            <img
              src={modalImage}
              alt="Zoomed Image"
              className="w-full h-auto object-contain"
            />
            <button
              onClick={closeImageModal}
              className="absolute top-2 right-2 text-white text-2xl font-semibold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuList;
