// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.svg"; // replace with your wood panel product image

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Calculate Prices for <span className="text-blue-300">HPL Particleboards</span>
          </h1>
          <p className="text-lg text-blue-100">
            Select size, thickness, and décor. Get instant prices per m². Simplify wholesale orders.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition">
              Start Calculation
            </button>
            <button className="border border-blue-300 hover:bg-blue-700 px-6 py-3 rounded-2xl font-semibold transition">
              Explore Décor Options
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src={heroImg}
            alt="HPL Particleboard P2"
            className="w-full max-w-xl rounded-2xl shadow-lg"
            animate={{ rotate: [0, 2, -2, 0] }} // slow subtle spin
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
