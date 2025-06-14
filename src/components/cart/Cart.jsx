/* eslint-disable no-unused-vars */



// src/pages/Cart.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await api("/cart", "GET", null, true);
      setCart({
        ...data,
        cartItems: data.products.map((product) => ({
          id: product.id,
          quantity: product.cartItem.quantity,
          product,
        })),
      });
    } catch (err) {
      setError(err.message || "Failed to load cart.");
      if (err.message.includes("token")) {
        toast.error("Session expired. Please login again.");
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleDeleteItem = async (productId) => {
    try {
      setActionLoading(true);
      await api(`/cart/${productId}`, "DELETE", null, true);
      toast.success("Item removed.");
      await fetchCart();
    } catch (err) {
      toast.error(err.message || "Error removing item.");
      if (err.message.includes("token")) navigate("/login");
    } finally {
      setActionLoading(false);
    }
  };

  const calculateTotal = () => {
    if (!cart?.cartItems?.length) return 0;
    return cart.cartItems.reduce(
      (total, item) => total + item.quantity * parseFloat(item.product.price),
      0
    );
  };

  if (loading) return <div className="pt-20 text-center">Loading Cart...</div>;
  if (error) return <div className="pt-20 text-red-600 text-center">{error}</div>;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 max-w-6xl ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-8">
        YOUR CART
      </h1>

      {cart?.cartItems?.length === 0 ? (
        <div className="text-center bg-white p-6 rounded shadow">
          <p className="text-xl mb-4">Your cart is empty!</p>
          <Link to="/products" className="text-[#96712a] font-medium hover:underline">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white p-6 rounded shadow">
            {cart.cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.product.images?.[0]?.imageUrl || "/placeholder.png"}
                    alt={item.product.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.product.name}</h4>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-medium">
                    ₹{(item.quantity * parseFloat(item.product.price)).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleDeleteItem(item.product.id)}
                    disabled={actionLoading}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 mb-8">
            <h2 className="text-xl font-semibold">Total: ₹{calculateTotal().toFixed(2)}</h2>
            <button
              onClick={() => navigate("/checkout")}
              className="mt-4 bg-[#96712a] hover:bg-[#7e5f1d] text-white py-3 px-8 rounded-2xl text-lg font-semibold transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
