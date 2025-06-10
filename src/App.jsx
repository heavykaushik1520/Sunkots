import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import MenuList from "./components/menu/MenuList";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Infrastructure from "./components/infrastructure/Infrastructure";
import EatItToBelieveItSection from "./components/banner/EatItToBelieveItSection";
import ContactForm from "./components/contact/ContactForm";
import Cart from "./components/cart/Cart";
import PaymentPage from "./components/payment/PaymentPage";
import { Toaster } from "react-hot-toast";
import { useAuth, AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage"; // Ensure this path is correct
import SignupPage from "./pages/SignupPage";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/orders/MyOrders";
import ProductDetail from "./components/menu/ProductDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundReturnPolicy from "./pages/RefundReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsConditions";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function AppContent() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Menu />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-return-policy" element={<RefundReturnPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-orders"
          element={
            <PrivateRoute>
              <MyOrders />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
