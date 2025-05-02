/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PaymentPage = ({ totalAmount }) => {
  

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [upiId, setUpiId] = useState("");

  const handlePayNow = () => {
    alert(`Payment of ₹${totalAmount} via ${paymentMethod} initiated!`);
  };

  const upiOptions = [
    { id: "gpay", label: "Google Pay", icon: "🟢" },
    { id: "phonepe", label: "PhonePe", icon: "🔵" },
    { id: "paytm", label: "Paytm", icon: "🔷" },
  ];

  return (
    <motion.div
      className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 mt-10 mb-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-[#017043]">
        Select Payment Method
      </h2>

      {/* Payment Method Switcher */}
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setPaymentMethod("card")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            paymentMethod === "card"
              ? "bg-[#017043] text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          Credit / Debit Card
        </button>
        <button
          onClick={() => setPaymentMethod("upi")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            paymentMethod === "upi"
              ? "bg-[#017043] text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
          }`}
        >
          UPI
        </button>
      </div>

      {/* Card Section */}
      {paymentMethod === "card" && (
        <motion.div
          key="card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border rounded px-4 py-2 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="text"
            placeholder="Card Number"
            maxLength="16"
            className="w-full border rounded px-4 py-2 dark:bg-gray-800 dark:text-white"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border rounded px-4 py-2 dark:bg-gray-800 dark:text-white"
            />
            <input
              type="text"
              placeholder="CVV"
              maxLength="3"
              className="w-1/2 border rounded px-4 py-2 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </motion.div>
      )}

      {/* UPI Section */}
      {paymentMethod === "upi" && (
        <motion.div
          key="upi"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="flex justify-around mb-2">
            {upiOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setUpiId(option.id)}
                className={`text-sm px-4 py-2 rounded-full transition ${
                  upiId === option.id
                    ? "bg-[#017043] text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                }`}
              >
                {option.icon} {option.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="w-full border rounded px-4 py-2 dark:bg-gray-800 dark:text-white"
          />
        </motion.div>
      )}

      {/* Total and Pay Button */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Total: ₹{totalAmount}
        </p>
        <button
          onClick={handlePayNow}
          className="w-full py-2 px-6 bg-[#96712a] text-white font-semibold rounded hover:bg-[#7b5a1c] transition"
        >
          Pay Now
        </button>
      </div>
    </motion.div>
  );
};

export default PaymentPage;
