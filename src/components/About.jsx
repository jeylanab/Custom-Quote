import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/icon.png"; // Replace with your image

const highlights = [
  "Trusted by wholesalers across Europe",
  "Instant and accurate pricing calculations",
  "Easy-to-use interface for quick orders",
  "Supports various décors and thicknesses",
];

export default function About() {
  return (
    <section className="py-20 mt-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            About <span className="text-blue-500">CustomCalc</span>
          </h2>
          <p className="text-gray-600 text-lg">
            CustomCalc simplifies wholesale HPL Particleboard pricing, helping businesses calculate and order efficiently. Our platform ensures transparent pricing, supports multiple décor options, and provides quick results for smarter business decisions.
          </p>
          
          <ul className="space-y-2">
            {highlights.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex items-center space-x-2 text-gray-700"
              >
                <span className="text-blue-500 font-bold">✓</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About CustomCalc"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
