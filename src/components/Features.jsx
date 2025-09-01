import React from "react";
import { motion } from "framer-motion";
import { Cpu, DollarSign, CheckCircle, Truck } from "lucide-react";

const features = [
  {
    icon: <Cpu size={36} className="text-blue-500" />,
    title: "Smart Calculation",
    description: "Instantly calculate prices based on size, thickness, décor, and quantity.",
  },
  {
    icon: <DollarSign size={36} className="text-green-500" />,
    title: "Transparent Pricing",
    description: "All prices are clearly displayed with optional surcharges and minimums.",
  },
  {
    icon: <CheckCircle size={36} className="text-purple-500" />,
    title: "Easy Ordering",
    description: "Seamlessly plan wholesale purchases and manage minimum orders efficiently.",
  },
  {
    icon: <Truck size={36} className="text-yellow-500" />,
    title: "Fast Delivery",
    description: "Track orders and get quick delivery for your particleboard panels.",
  },
];

export default function Features() {
  return (
    <section className="py-20 mt-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Why Choose <span className="text-blue-500">CustomCalc</span>
        </h2>
        <p className="text-gray-600 mb-12">
          We simplify wholesale calculations and streamline your ordering process.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
