// src/components/Navbar.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-6 my-4 fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-md rounded-2xl max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              C
            </div>
            <span className="text-lg font-semibold text-gray-800">
              CustomCalc
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <NavLink to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </NavLink>
            <NavLink
              to="/calculator"
              className="text-gray-700 hover:text-blue-600"
            >
              Calculator
            </NavLink>
            <NavLink
              to="/features"
              className="text-gray-700 hover:text-blue-600"
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop Custom Button */}
          <div className="hidden md:flex">
            <NavLink
              to="/calculator"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-2xl">
          <div className="px-6 py-4 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/calculator"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Calculator
            </NavLink>
            <NavLink
              to="/features"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Features
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </NavLink>
            <NavLink
              to="/calculator"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
