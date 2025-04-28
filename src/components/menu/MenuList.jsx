/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import "./MenuList.css"; // For small custom CSS if needed

const categories = ["BREAKFAST", "SPECIALS", "DRINKS", "DESSERTS", "SALADS"];

const menuItems = [
  {
    id: 1,
    image: "/images/menu/2000x2000.png",
    name: "Shrimp Fondue",
    description:
      "Autem vel eum iriure dolor in hendrerit in vulputate molestie...",
    price: "$14.60",
    category: "DESSERTS",
  },
  {
    id: 2,
    image: "/images/menu/2000x2000.png",
    name: "Freshly Baked Baguette",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam...",
    price: "$13",
    category: "DESSERTS",
  },
  {
    id: 3,
    image: "/images/menu/2000x2000.png",
    name: "Chocolate Cherry Cheesecake",
    description:
      "Autem vel eum iriure dolor in hendrerit in vulputate molestie...",
    price: "$9.10",
    category: "DESSERTS",
  },
  {
    id: 4,
    image: "/images/menu/2000x2000.png",
    name: "French Breakfast",
    description:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate molestie...",
    price: "$15",
    category: "DESSERTS",
  },
  {
    id: 5,
    image: "/images/menu/2000x2000.png",
    name: "Classic French Croissant",
    description:
      "Duis autem vel eum iriure dolor in hendrerit in vulputate molestie...",
    price: "$20",
    category: "DESSERTS",
  },
  {
    id: 6,
    image: "/images/menu/2000x2000.png",
    name: "New York Cheesecake",
    description:
      "UL autem vel eum iriure dolor in hendrerit in vulputate molestie...",
    price: "$7.59",
    category: "DESSERTS",
  },
];

// Helper to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function MenuList() {
  const [items, setItems] = useState(menuItems);
  const [selectedCategory, setSelectedCategory] = useState("DESSERTS");

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setItems(shuffleArray(menuItems)); // Just shuffle, no filtering for now
  };

  return (
    <>
      <section className="bg-white p-6 md:p-10 lg:p-20 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#311d09] tracking-widest mb-4">
          BON APPETIT
        </h1>

        <p className="text-sm md:text-base text-[#a4907c] max-w-prose mx-auto">
          Duis sit amet lacus maximus quam bibendum ultrices. Etiam fermentum id
          turpis viverra gravida. Phasellus fringilla sapien eu maximus.
          Pellentesque nibh risus, ultrices sit amet efficitur eu, ut tortor.
        </p>
      </section>

      {/* Category Tabs */}
      {/* <div className="flex justify-center space-x-8 mt-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`text-lg font-semibold px-3 py-1 rounded transition 
              ${
                selectedCategory === cat
                  ? "border-2 border-green-600 text-green-700"
                  : "border-2 border-transparent text-[#422507] hover:border-green-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`text-base md:text-lg font-semibold px-4 py-1  transition
        ${
          selectedCategory === cat
            ? "border-1 border-green-600 text-green-700"
            : "border-1 border-transparent text-[#422507] hover:border-green-600"
        }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 mb-20">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-[90px] h-[90px] object-cover"
            />
            <div className="flex-1 text-left">
              <div className="flex justify-between items-center">
                <h3 className="text-green-600 font-semibold text-md hover:text-[#7B3F00] transition">
                  {item.name}
                </h3>
                <span className="text-gray-900 font-bold">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 px-6 md:px-20">
        {/* Coffee Menu Section */}
        <div className="text-center my-12">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#301a03ce] tracking-wider mb-6 mt-50">
            COFFEE MENU
          </h1>

          {/* Quote */}
          <div className="max-w-3xl mx-auto text-[#a4907c] text-base md:text-lg mb-10  leading-relaxed">
            <p className="mb-4">
              “I'm looking to nature for my inspiration. Letting the natural
              produce speak. There's so much out there, so much elegance and
              beauty.”
            </p>
            <p className="font-semibold">– PETER GILMORE</p>
          </div>

          {/* View Full Menu Button */}
          <a
            href="#"
            className="relative inline-block px-6 py-4 border-2 border-green-500 text-green-500 text-sm md:text-base font-light tracking-wider transition-all duration-300 ease-in-out group hover:border-[#301a03ce]"
          >
            {/* Shadow border */}
            <span className="absolute inset-0   border-2 border-[#311b0460] translate-x-[3px] translate-y-[4px] transition-colors duration-300 ease-in-out group-hover:border-[#301a03ce]"></span>

            {/* Real border and text */}
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#301a03ce] tracking-tighter">
              VIEW FULL MENU
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default MenuList;
