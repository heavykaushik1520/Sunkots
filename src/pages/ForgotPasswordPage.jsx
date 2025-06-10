// src/pages/ForgotPasswordPage.js
import React, { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api("/auth/user/forgot-password", "POST", { email });
      toast.success("Reset link sent to your email.");
    } catch (error) {
      toast.error(error.message || "Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#96712a] mb-6">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 mb-1"
            >
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-900 rounded-md focus:ring-[#96712a] focus:border-[#96712a]"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#96712a] text-white font-semibold rounded-md hover:bg-[#7a5c21] transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          <p className="text-sm text-red-600 mt-2">
            Note:Check your spam folder if you don't see mail in your inbox.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
