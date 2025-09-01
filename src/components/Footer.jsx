// src/components/Footer.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-blue-200 via-blue-100 to-white text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold">
              C
            </div>
            <span className="text-lg font-semibold">CustomCalc</span>
          </div>
          <p className="text-gray-600">
            Simplify wholesale calculations for HPL Particleboards. Instant pricing and easy ordering.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/calculator" className="hover:text-blue-400 transition">Calculator</Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-blue-400 transition">Features</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">About</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h3 className="font-semibold">Contact</h3>
          <p>Email: info@customcalc.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-2 text-gray-600">
            <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><Twitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><Instagram /></a>
            <a href="#" className="hover:text-blue-400 transition"><Linkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-blue-100 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} CustomCalc. All rights reserved.
      </div>
    </footer>
  );
}
