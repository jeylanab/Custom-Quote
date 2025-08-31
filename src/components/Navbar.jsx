// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-6 my-4 fixed top-0 left-0 right-0 z-50">
      <div className=" bg-white shadow-md rounded-2xl  max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              C
            </div>
            <span className="text-lg font-semibold text-gray-800">
              CustomCalc
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-blue-600">
              Calculator
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Desktop Custom Button */}
          <div className="hidden md:flex">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
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
            <a href="#home" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a
              href="#calculator"
              className="block text-gray-700 hover:text-blue-600"
            >
              Calculator
            </a>
            <a
              href="#features"
              className="block text-gray-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-blue-600"
            >
              Contact
            </a>
            <button className="w-full mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
