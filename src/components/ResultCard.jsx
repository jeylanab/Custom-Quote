import React from "react";
import { motion } from "framer-motion";
import { Euro, Weight } from "lucide-react";

export default function ResultCard({ result }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white border-2 border-blue-200 rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Calculation Results
      </h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center gap-2">
          <Euro className="w-5 h-5 text-blue-600" />
          <strong>Base Price (€/m²):</strong> €{result.basePrice}
        </li>
        <li className="flex items-center gap-2">
          <Euro className="w-5 h-5 text-green-600" />
          <strong>Price per Board:</strong> €{result.pricePerBoard}
        </li>
        <li className="flex items-center gap-2">
          <Euro className="w-5 h-5 text-purple-600" />
          <strong>Total Price (excl. VAT):</strong> €{result.total}
        </li>
        <li className="flex items-center gap-2">
          <Weight className="w-5 h-5 text-gray-700" />
          <strong>Weight per Board:</strong> {result.weightPerBoard} kg
        </li>
        <li className="flex items-center gap-2">
          <Weight className="w-5 h-5 text-gray-900" />
          <strong>Total Weight:</strong> {result.totalWeight} kg
        </li>
      </ul>
    </motion.div>
  );
}
