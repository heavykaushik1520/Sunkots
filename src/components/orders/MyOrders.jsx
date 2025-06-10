/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { isAuthenticated } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await api("/order", "GET", null, true);
      setOrders(res);
    } catch (err) {
      toast.error("Failed to load orders", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await api(`/order?id=${orderId}`, "DELETE", null, true);
      toast.success("Order deleted successfully");
      // Re-fetch after deletion
      fetchOrders();
    } catch (err) {
      toast.error("Failed to delete order", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 text-center text-lg">
        Loading your orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="min-h-screen pt-20 text-center text-xl font-semibold text-gray-900">
        No orders yet.
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4">
      <h1 className="text-3xl font-bold text-center text-[#96712a] mb-10 font-playfair">
        My Orders
      </h1>

      <div className="space-y-8 max-w-4xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-2xl shadow-lg shadow-gray-900/30 p-6 bg-white backdrop-blur-sm mb-8"
          >
            <div className="mb-4 space-y-1">
              <p className="text-gray-900">
                Order ID: <span className="font-semibold">{order.id}</span>
              </p>
              {/* <p className="text-gray-900">
                Status:{" "}
                <span className="capitalize font-semibold">{order.status}</span>
              </p> */}
              <p className="text-gray-900">
                Total Amount:{" "}
                <span className="font-semibold">₹{order.totalAmount}</span>
              </p>
              <p className="text-gray-900">
                Address: <span className="font-semibold">{order.address}</span>
              </p>
              <p className="text-gray-900">
                Date:{" "}
                <span className="font-semibold">
                  {new Date(order.createdAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {order.orderItems.map(
                ({ id, quantity, priceAtPurchase, product }) => (
                  <div
                    key={id}
                    className="flex items-center gap-4 border p-3 rounded-xl shadow-sm"
                  >
                    <img
                      src={
                        product.images && product.images.length > 0
                          ? product.images[0].imageUrl
                          : "https://via.placeholder.com/100?text=No+Image"
                      }
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div>
                      <p className="font-semibold text-gray-800">
                        {product.name}
                      </p>
                      <p className="text-sm text-gray-900">
                        {product.description}
                      </p>
                      <p className="text-sm text-gray-900">
                        Weight: {product.weight}g
                      </p>
                      <p className="text-sm text-gray-900">
                        Quantity: {quantity}
                      </p>
                      <p className="text-sm text-gray-900">
                        Price: ₹{priceAtPurchase}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
