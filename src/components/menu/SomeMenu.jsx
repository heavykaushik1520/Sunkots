/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.15 * i },
  }),
};

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

function ShowMenu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingToCartId, setAddingToCartId] = useState(null);
  const [quantities, setQuantities] = useState({});

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api("/products", "GET");
        const data = response.products;
        if (!Array.isArray(data))
          throw new Error("Product data is not an array");

        setProducts(data.slice(0, 4)); // Only show first 4
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
        toast.error("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const quantity = quantities[productId] || 1;

    setAddingToCartId(productId);
    try {
      await api("/cart", "POST", { productId, quantity }, true);
      toast.success(`Added ${quantity} item(s) to cart!`);
    } catch (err) {
      toast.error(err.message || "Failed to add product to cart.");
      if (err.message.includes("Invalid token")) {
        localStorage.setItem("redirectAfterLogin", window.location.pathname);
        navigate("/login");
      }
    } finally {
      setAddingToCartId(null);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex gap-4 border-b pb-4"
              variants={itemVariants}
              initial="initial"
              animate="animate"
              custom={index}
            >
              <img
                src={item.images?.[0]?.imageUrl || ""}
                alt={item.name}
                className="w-24 h-24 object-cover rounded cursor-pointer"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-700">
                  {item.name}
                </h3>
                <p className="text-[#96712a]">{item.description}</p>
                <p className="font-bold text-green-600 mt-1">
                  ₹{parseFloat(item.price).toFixed(2)}/-
                </p>

                <div className="flex items-center mt-2 gap-2">
                  <label
                    htmlFor={`quantity-${item.id}`}
                    className="text-sm font-semibold"
                  >
                    Qty:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1 text-center"
                  />
                </div>

                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => handleAddToCart(item.id)}
                    disabled={addingToCartId === item.id}
                    className={`px-4 py-1 rounded-full text-sm font-semibold transition duration-300 ${
                      addingToCartId === item.id
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-green-100 text-green-700 hover:bg-green-600 hover:text-white"
                    }`}
                  >
                    {addingToCartId === item.id ? "Adding..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        {/* <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-block px-6 py-2 bg-[#96712a] text-white font-semibold rounded hover:bg-[#7b5a1c] transition"
          >
            View More Products
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default ShowMenu;
