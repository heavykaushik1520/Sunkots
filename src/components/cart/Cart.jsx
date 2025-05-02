import React, { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    image: "images/menu/mini_khari.webp",
    name: "Mini Khari",
    description:
      "Lovingly handcrafted, our artisanal and crispy Mini Khari makes for a good tea time snack.",
    price: "14.60",
    category: "DESSERTS",
  },
  {
    id: 2,
    image: "images/menu/bombay_khari.jpg",
    name: "Bombay Khari",
    description:
      "Big and flaky, with thin delicate layers, our Bombay Khari is a favourite breakfast item.",
    price: "13",
    category: "DESSERTS",
  },
  {
    id: 3,
    image: "images/menu/atta_khari.webp",
    name: "Atta Khari",
    description:
      "Light and delectable, the goodness of whole wheat flour gives it a nourishing touch.",
    price: "9.10",
    category: "DESSERTS",
  },
  {
    id: 4,
    image: "images/menu/maska_khari.jpg",
    name: "Maska Khari",
    description:
      "Crunchy and super soft, our maska khari is the most loved Khari variety.",
    price: "15",
    category: "DESSERTS",
  },
];

const Cart = () => {
    


  const [cartItems, setCartItems] = useState(
    menuItems.map((item) => ({ ...item, quantity: 1 }))
  );

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <p className="text-gray-600 text-center mb-4">
        You have {cartItems.length} item{cartItems.length !== 1 && "s"} in your cart
      </p>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-md object-cover"
            />
            <div className="flex-1">
              <h3 className="text-[#017043] font-semibold">{item.name}</h3>
              <p className="text-[#96712a] text-sm">{item.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 bg-[#017043] text-white rounded disabled:opacity-50"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="min-w-[24px] text-center">{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 bg-[#017043] text-white rounded"
              >
                +
              </button>
            </div>

            <div className="text-[#96712a] font-semibold w-24 text-center">
              ₹{(parseFloat(item.price) * item.quantity).toFixed(2)}
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="text-right text-lg font-bold text-[#017043] mt-6">
        Total: ₹
        {cartItems
          .reduce(
            (sum, item) => sum + parseFloat(item.price) * item.quantity,
            0
          )
          .toFixed(2)}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
        <Link
          to="/menu"
          className="px-6 py-2 bg-[#96712ae8] text-white rounded-md hover:bg-[#7b5a1c] transition"
        >
          Continue Shopping
        </Link>
        <Link  to="/payment"
         className="px-6 py-2 bg-[#017044e8] text-white rounded-md hover:bg-[#015c39] transition">
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
};

export default Cart;
