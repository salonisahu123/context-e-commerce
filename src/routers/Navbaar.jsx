import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { ContextAPI } from "../Context/UserContext"; // <-- import context

const Navbaar = () => {
  const { like } = useContext(ContextAPI); // ❤️ get liked products from context

  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold">🛍️ MyShop</h1>

      <div className="flex gap-6 items-center">
        {/* 🏠 Home Link */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-400 transition duration-300 ${
              isActive ? "text-yellow-400 font-medium" : ""
            }`
          }
        >
          Home
        </NavLink>

        {/* 🛒 Cart Link */}
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `hover:text-yellow-400 transition duration-300 ${
              isActive ? "text-yellow-400 font-medium" : ""
            }`
          }
        >
          Cart
        </NavLink>

        {/* ❤️ UsersLike (Heart icon + count badge) */}
        <div className="relative">
          <NavLink
            to="/UsersLike"
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${
                isActive ? "text-white font-medium" : ""
              }`
            }
          >
            <FaHeart size={20} />
          </NavLink>
          {/* 🔢 Like count badge */}
          {like.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {like.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbaar;
