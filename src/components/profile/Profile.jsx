import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";
import { Link , useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";



const Profile = () => {
  const { user, setUser, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();



  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await api("/me", "GET", null, true);
        console.log(data);
        setUser?.(data);
      } catch (err) {
        setError(err.message || "Failed to fetch profile");
        toast.error(err.message || "Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [setUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-20 text-lg text-gray-900">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen pt-20 text-red-600 text-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-white border border-gray-900 shadow-xl shadow-gray-400/30 rounded-2xl p-8 backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
          My Profile
        </h1>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-900 text-[17px]">
          <div>
            <p className="font-medium text-gray-500">First Name</p>
            <p className="font-semibold">{user?.firstname}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Last Name</p>
            <p className="font-semibold">{user?.lastname}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Email</p>
            <p className="font-semibold">{user?.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Phone</p>
            <p className="font-semibold">{user?.phone}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="font-medium text-gray-500">Address</p>
            <p className="font-semibold">{user?.address}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Role</p>
            <p className="font-semibold capitalize">{user?.role}</p>
          </div>
          <div>
            <p className="font-medium text-gray-500">Joined On</p>
            <p className="font-semibold">
              {new Date(user?.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/my-orders"
            className="inline-block text-[#96712a] font-playfair font-bold text-[18px] px-5 py-2 border border-[#96712a] rounded-full hover:bg-[#96712a] hover:text-white transition-all duration-300"
          >
            My Orders
          </Link>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => {
              logout();
              navigate("/login");
            }}
            className="inline-flex items-center gap-2 text-red-600 font-semibold px-5 py-2 border border-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            <RiLogoutCircleRLine className="text-xl" /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
