/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import toast from "react-hot-toast";
import api from "../../services/api"; // Assuming api.js is in src/services/api.js

function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    fullAddress: "",
    townOrCity: "",
    country: "",
    state: "",
    pinCode: "",
  });
  const [placedOrderId, setPlacedOrderId] = useState(null);
  const [orderTotalAmount, setOrderTotalAmount] = useState(0);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const fetchCart = async () => {
    try {
      setLoading(true);
      // Use your 'api' wrapper here and set 'auth' to true
      const data = await api("/cart", "GET", null, true); // endpoint, method, data, auth
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
      setCart(null);
      // If unauthorized, redirect to login
      if (
        err.message.includes("Authentication token not found") ||
        err.message.includes("Invalid or malformed token")
      ) {
        toast.error("Session expired or not logged in. Please log in again.");
        navigate("/login"); // Assuming you have a /login route
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const {
      firstName,
      lastName,
      mobileNumber,
      emailAddress,
      fullAddress,
      townOrCity,
      country,
      state,
      pinCode,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !emailAddress ||
      !fullAddress ||
      !townOrCity ||
      !country ||
      !state ||
      !pinCode
    ) {
      toast.error("All fields are mandatory.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const pinCodeRegex = /^\d{6}$/;

    if (!emailRegex.test(emailAddress)) {
      toast.error("Invalid email format.");
      return false;
    }
    if (!mobileRegex.test(mobileNumber)) {
      toast.error("Invalid mobile number.");
      return false;
    }
    if (!pinCodeRegex.test(pinCode)) {
      toast.error("Invalid pin code.");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    if (!cart?.cartItems?.length) {
      toast.error(
        "Your cart is empty. Please add items before placing an order."
      );
      return;
    }

    try {
      setOrderLoading(true);
      // Use your 'api' wrapper here
      const data = await api(
        "/order",
        "POST",
        {
          ...formData,
          address: `${formData.fullAddress}, ${formData.townOrCity}, ${formData.state}, ${formData.country} - ${formData.pinCode}`,
        },
        true // This is an authenticated request
      );

      toast.success("Order placed successfully! Please proceed to payment.");
      setPlacedOrderId(data.orderId);
      setOrderTotalAmount(calculateTotal()); // Or, if backend returns total amount with orderId, use that.
    } catch (err) {
      toast.error(err.message || "Failed to place order.");
      if (err.message.includes("token")) {
        // Basic check for auth errors
        navigate("/login");
      }
    } finally {
      setOrderLoading(false);
    }
  };

  const handleDeleteItem = async (productId) => {
    try {
      setActionLoading(true);
      // Use your 'api' wrapper here
      await api(`/cart/${productId}`, "DELETE", null, true); // Authenticated request

      toast.success("Item removed from cart.");
      await fetchCart(); // Re-fetch cart after deletion
    } catch (err) {
      toast.error(err.message);
      if (err.message.includes("token")) {
        navigate("/login");
      }
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

  const handlePayWithRazorpay = async () => {
    if (!placedOrderId) {
      toast.error(
        "No order found to process payment. Please place an order first."
      );
      return;
    }

    setOrderLoading(true);
    try {
      // Step 1: Call your backend to create a Razorpay Order using 'api' wrapper
      const data = await api(
        "/payment/create-order",
        "POST",
        { orderId: placedOrderId },
        true // Authenticated request
      );

      // Step 2: Configure Razorpay Checkout options
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "Sunkots",
        description: `Payment for Order #${placedOrderId}`,
        order_id: data.razorpayOrderId,
        handler: async function (response) {
          console.log("Razorpay Payment Successful:", response);
          toast.success("Payment successful! Verifying order...");

          try {
            const verifyData = await api(
              "/payment/verify-payment",
              "POST",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              true
            );

            if (verifyData.status === "ok") {
              toast.success("Order confirmed and payment verified!");
              navigate(`/order-success/${placedOrderId}`);
            } else {
              toast.error(
                verifyData.message ||
                  "Payment verification failed on backend. Please contact support."
              );
            }
          } catch (verifyErr) {
            console.error("Error during payment verification call:", verifyErr);
            toast.error(
              "An error occurred during payment verification. Please contact support."
            );
            if (verifyErr.message.includes("token")) {
              navigate("/login");
            }
          }
        },
        prefill: {
          name: formData.firstName + " " + formData.lastName,
          email: formData.emailAddress,
          contact: formData.mobileNumber,
        },
        notes: {
          internal_order_id: String(placedOrderId),
        },
        theme: {
          color: "#96712a",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        console.error("Razorpay Payment Failed:", response.error);
        toast.error(
          `Payment failed: ${
            response.error.description || "Unknown error"
          }. Code: ${response.error.code}`
        );
      });
      rzp.open();
    } catch (err) {
      toast.error(err.message || "Failed to initiate payment.");
      console.error("Payment initiation error:", err);
      if (err.message.includes("token")) {
        navigate("/login");
      }
    } finally {
      setOrderLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 text-xl">
        Loading Cart...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 max-w-6xl ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 mt-8">
        YOUR CART
      </h1>

      {cart?.cartItems?.length === 0 && !placedOrderId ? (
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <p className="text-xl mb-4">Your cart is empty!</p>
          <Link
            to="/products"
            className="text-[#96712a] font-medium hover:underline"
          >
            Start shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Items in Cart</h2>
              <div className="divide-y">
                {cart?.cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={
                          item.product.images?.[0]?.imageUrl ||
                          "/placeholder.png"
                        }
                        alt={item.product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800 font-medium">
                        ₹
                        {(
                          item.quantity * parseFloat(item.product.price)
                        ).toFixed(2)}
                      </p>
                      {!placedOrderId && (
                        <button
                          onClick={() => handleDeleteItem(item.product.id)}
                          disabled={actionLoading}
                          className="text-red-500 text-sm hover:underline mt-1"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg shadow h-fit">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                {cart?.cartItems?.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div className="text-gray-700">
                      {item.product.name} × {item.quantity}
                    </div>
                    <div className="text-gray-900 font-medium">
                      ₹
                      {(item.quantity * parseFloat(item.product.price)).toFixed(
                        2
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span className="text-[#649825]">
                  ₹{calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {!placedOrderId ? (
            <div className="bg-white p-10 rounded-lg shadow max-w-4xl mx-auto mt-12">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
                DELIVERY INFORMATION
              </h2>
              <div className="space-y-6">
                {[
                  { name: "firstName", label: "First Name" },
                  { name: "lastName", label: "Last Name" },
                  { name: "mobileNumber", label: "Mobile Number" },
                  { name: "emailAddress", label: "Email Address" },
                  { name: "fullAddress", label: "Full Address" },
                  { name: "townOrCity", label: "Town/City" },
                  { name: "state", label: "State" },
                  { name: "country", label: "Country" },
                  { name: "pinCode", label: "Pin Code" },
                ].map(({ name, label }) => (
                  <input
                    key={name}
                    name={name}
                    placeholder={label}
                    value={formData[name]}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-2xl px-6 py-4 w-full text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#96712a] transition-all duration-200"
                    required
                  />
                ))}
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={orderLoading}
                className="w-full mt-10 bg-[#96712a] hover:bg-[#7e5f1d] text-white py-4 text-xl rounded-2xl font-bold transition"
              >
                {orderLoading ? "Placing Order..." : "Place Order"}
              </button>
            </div>
          ) : (
            <div className="bg-white p-10 rounded-lg shadow max-w-4xl mx-auto mt-12 text-center">
              <h2 className="text-3xl font-semibold mb-8 text-gray-800">
                PROCEED TO PAYMENT
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Your Order ID:{" "}
                <span className="font-bold text-[#96712a]">
                  {placedOrderId}
                </span>
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Total Amount to Pay:{" "}
                <span className="font-bold text-[#649825]">
                  ₹{orderTotalAmount.toFixed(2)}
                </span>
              </p>

              <button
                onClick={handlePayWithRazorpay}
                disabled={orderLoading}
                className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-6 bg-[#007bffc9] hover:bg-[#0056b3] text-white py-4 text-xl rounded-2xl font-bold transition flex items-center justify-center space-x-2"
              >
                <span>
                  {orderLoading
                    ? "Redirecting..."
                    : "PAY USING CARD,  NETBANKING,UPI, WALLETS"}
                </span>
                <img
                  src="https://razorpay.com/assets/razorpay-logo.svg"
                  alt="Razorpay"
                  className="h-6"
                />
              </button>

              <p className="text-sm text-gray-500 mt-4">
                You will be redirected to Razorpay's secure payment gateway.
              </p>
              <button
                onClick={() => {
                  setPlacedOrderId(null);
                  toast.info(
                    "You can now modify your address or re-place the order."
                  );
                }}
                className="text-gray-600 hover:underline mt-4 text-sm"
              >
                Go back to change order/address
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
