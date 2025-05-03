/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./MenuList.css";

const categories = ["SAVOURIES", "SWEETS", "HEALTHY"];

const menuItems = [
  {
    id: 1,
    image: "images/menu/product/khari-Photoroom.png",
    name: "Mini Khari",
    description:
      "Lovingly handcrafted, our artisanal and crispy Mini Khari makes for a good tea time snack.",
    price: "110/-",
    category: "DESSERTS",
  },
  {
    id: 2,
    image: "images/menu/product/bomb_kh.png",
    name: "Bombay Khari",
    description:
      "Big and flaky, with thin delicate layers, our Bombay Khari is a favourite breakfast item.",
    price: "140/-",
    category: "DESSERTS",
  },
  {
    id: 3,
    image: "images/menu/product/at_kh.png",
    name: "Atta Khari",
    description:
      "Light and delectable, the goodness of whole wheat flour gives it a nourishing touch.",
    price: "90/-",
    category: "DESSERTS",
  },
  {
    id: 4,
    image: "images/menu/product/maskaa_kharii.png",
    name: "Maska Khari",
    description:
      "Crunchy and super soft, our maska khari is most loved Khari Variety.",
    price: "80/-",
    category: "DESSERTS",
  },
];

// Shuffle helper
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 * i },
  }),
};

function SomeMenu() {
  const [items, setItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState("DESSERTS");
  const [cart, setCart] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setItems(shuffleArray(menuItems));
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const found = prevCart.find((cartItem) => cartItem.id === item.id);
      if (found) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      {/* Category Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-4 mb-8">
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
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

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 mb-16">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex items-start gap-4 border-b pb-4"
            variants={itemVariants}
            initial="initial"
            animate="animate"
            custom={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[90px] h-[90px] object-cover rounded-md shadow-sm cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            />

            <div className="flex-1 text-left">
              <div className="flex justify-between items-center">
                <h3 className="text-green-700 font-semibold text-md hover:text-[#7B3F00] transition duration-200">
                  {item.name}
                </h3>
                <span className="text-green-600 font-bold">₹{item.price}</span>
              </div>
              <p className="text-[#96712a] text-sm">{item.description}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-2 px-4 py-1 text-sm bg-[#017043] text-white rounded hover:bg-[#015c39] transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        // <div
        //   className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        //   onClick={() => setSelectedImage(null)}
        // >
        <div className="fixed inset-0 bg-[#96712a]/90 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>

          <div className="relative">
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-1 hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* View Cart Button */}
      {/* <div className="text-center mt-10 mb-20">
        <Link
          to="/cart"
          className="inline-block px-6 py-2 bg-[#96712a] text-white font-semibold rounded hover:bg-[#7b5a1c] transition"
        >
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div> */}
    </>
  );
}

export default SomeMenu;
