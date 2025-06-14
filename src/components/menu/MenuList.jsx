/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext"; // adjust import as needed

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

function MenuList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [addingToCartId, setAddingToCartId] = useState(null);
  const [quantities, setQuantities] = useState({});

  const limit = 8; // items per page

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const response = await api(
        `/products?page=${page}&limit=${limit}`,
        "GET"
      );
      const data = response.products;
      if (!Array.isArray(data)) throw new Error("Product data is not an array");

      setProducts(data);
      setTotalPages(response.totalPages || 1);
      setCurrentPage(response.currentPage || page);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
      toast.error("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const quantity = quantities[productId] || 1; // default to 1 if not set

    setAddingToCartId(productId);
    try {
      await api(
        "/cart",
        "POST",
        {
          productId,
          quantity,
        },
        true // auth required
      );
      toast.success(`Added ${quantity} item(s) to cart!`);
    } catch (err) {
      toast.error(err.message || "Failed to add product to cart.");
      if (
        err.message === "Authentication token not found." ||
        err.message.includes("Invalid token")
      ) {
        localStorage.setItem("redirectAfterLogin", window.location.pathname);
        navigate("/login");
      }
    } finally {
      setAddingToCartId(null);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return; // optionally prevent zero or negative
    setQuantities((prev) => ({
      ...prev,
      [productId]: newQuantity,
    }));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

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

                {/* Quantity input */}
                <div className="flex items-center mt-2 gap-2">
                  <label className="text-sm font-semibold">Qty:</label>
                  <div className="flex items-center border rounded overflow-hidden">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          Math.max(1, (quantities[item.id] || 1) - 1)
                        )
                      }
                      className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white px-2"
                    >
                      -
                    </button>
                    <span className="px-3 w-8 text-center">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          item.id,
                          (quantities[item.id] || 1) + 1
                        )
                      }
                      className="bg-green-100 text-green-700 hover:bg-green-600 hover:text-white px-2"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-center"
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

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Previous
          </button>
          <span className="self-center font-semibold">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default MenuList;
