import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/freshcart-logo.svg";
import {
  FaShoppingCart,
  FaHeart,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Brands", path: "/brands" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl">
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="w-32 h-10 object-contain"
                />
              </a>
            </h1>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5
                after:w-0 hover:after:w-full after:bg-blue-600 transition-all duration-200
                after:transition-all after:duration-200
                  ${
                    isActive
                      ? "text-blue-600 after:w-full"
                      : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <NavLink
              to="/cart"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <FaShoppingCart size={20} />
            </NavLink>
            <NavLink
              to="/favorites"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              <FaHeart size={20} />
            </NavLink>
            {isLoggedIn ? (
              <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <FaSignOutAlt size={20} />
              </button>
            ) : (
              <NavLink
                to="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <FaSignInAlt size={20} />
              </NavLink>
            )}
            {/* Mobile Menu Button */}
            <button
              className="md:hidden ml-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block text-gray-700 font-medium transition-colors duration-200 hover:text-blue-600
                  ${isActive ? "text-blue-600" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
