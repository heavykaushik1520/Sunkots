/* eslint-disable no-unused-vars */
// src/pages/Checkout.jsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";

function Checkout() {
  const [cart, setCart] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", mobileNumber: "", emailAddress: "",
    fullAddress: "", townOrCity: "", country: "", state: "", pinCode: ""
  });
  const [loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState(null);
  const [orderTotalAmount, setOrderTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const fetchCart = async () => {
    try {
      const data = await api("/cart", "GET", null, true);
      const cartItems = data.products.map((product) => ({
        id: product.id,
        quantity: product.cartItem.quantity,
        product,
      }));
      setCart({ ...data, cartItems });
    } catch (err) {
      toast.error("Failed to fetch cart.");
      if (err.message.includes("token")) navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { firstName, lastName, mobileNumber, emailAddress, fullAddress, townOrCity, country, state, pinCode } = formData;
    if (!firstName || !lastName || !mobileNumber || !emailAddress || !fullAddress || !townOrCity || !country || !state || !pinCode) {
      toast.error("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const pinRegex = /^\d{6}$/;
    if (!emailRegex.test(emailAddress)) return toast.error("Invalid email.");
    if (!mobileRegex.test(mobileNumber)) return toast.error("Invalid mobile.");
    if (!pinRegex.test(pinCode)) return toast.error("Invalid pincode.");
    return true;
  };

  const calculateTotal = () => {
    return cart?.cartItems?.reduce((total, item) => total + item.quantity * parseFloat(item.product.price), 0) || 0;
  };

  const placeOrder = async () => {
    if (!validateForm()) return;

    try {
      const totalAmount = calculateTotal();
      const res = await api("/order", "POST", {
        ...formData,
        address: `${formData.fullAddress}, ${formData.townOrCity}, ${formData.state}, ${formData.country} - ${formData.pinCode}`
      }, true);

      setOrderId(res.orderId);
      setOrderTotalAmount(totalAmount);
      toast.success("Order placed! Opening Razorpay...");
      payWithRazorpay(res.orderId, totalAmount);
    } catch (err) {
      toast.error("Order failed.");
      if (err.message.includes("token")) navigate("/login");
    }
  };

  const payWithRazorpay = async (placedOrderId, totalAmount) => {
    try {
      const data = await api("/payment/create-order", "POST", { orderId: placedOrderId }, true);
      const options = {
        key: data.key_id,
        amount: data.amount,
        currency: data.currency,
        name: "Sunkots",
        description: `Payment for Order #${placedOrderId}`,
        order_id: data.razorpayOrderId,
        handler: async function (response) {
          try {
            const verify = await api("/payment/verify-payment", "POST", response, true);
            if (verify.status === "ok") {
              toast.success("Payment verified!");
              navigate(`/order-success/${placedOrderId}`);
            } else {
              toast.error("Verification failed.");
            }
          } catch {
            toast.error("Verification error.");
            navigate("/login");
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.emailAddress,
          contact: formData.mobileNumber,
        },
        theme: { color: "#96712a" },
      };
      new window.Razorpay(options).open();
    } catch (err) {
      toast.error("Payment failed to initiate.",err);
    }
  };

  if (loading) return <div className="pt-20 text-center">Loading Checkout...</div>;

  return (
    <div className="container mx-auto px-4 pt-24 pb-10 max-w-6xl">
      <h1 className="text-4xl font-bold text-center mb-10">CHECKOUT</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Cart Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          {cart?.cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-3">
              <span>{item.product.name} x {item.quantity}</span>
              <span className="font-medium">₹{(item.quantity * parseFloat(item.product.price)).toFixed(2)}</span>
            </div>
          ))}
          <div className="pt-4 text-xl font-bold flex justify-between">
            <span>Total:</span>
            <span className="text-[#649825]">₹{calculateTotal().toFixed(2)}</span>
          </div>
        </div>

        {/* Delivery Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-6 text-center">Delivery Information</h2>
          <div className="space-y-4">
            {[
              { name: "firstName", label: "First Name" },
              { name: "lastName", label: "Last Name" },
              { name: "mobileNumber", label: "Mobile Number" },
              { name: "emailAddress", label: "Email Address" },
              { name: "fullAddress", label: "Full Address" },
              { name: "townOrCity", label: "Town / City" },
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
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-[#96712a] focus:outline-none"
              />
            ))}
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-[#96712a] hover:bg-[#7e5f1d] text-white py-4 rounded-xl text-lg font-bold"
          >
            Place Order & Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
