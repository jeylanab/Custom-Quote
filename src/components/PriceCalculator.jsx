import React, { useState } from "react";
import { motion } from "framer-motion";
import ResultCard from "./ResultCard";
import {
  Layers,
  Palette,
  Hash,
  CheckSquare,
  Calculator,
} from "lucide-react";

const PRICE_TABLE = {
  White: [30, 31, 32, 33, 34, 35, 36],
  "Color Basic": [40, 41, 42, 43, 44, 45, 46],
  "Color Special": [50, 51, 52, 53, 54, 55, 56],
  "Wood Basic": [60, 61, 62, 63, 64, 65, 66],
  "Wood Special": [70, 71, 72, 73, 74, 75, 76],
  "Matt Basic": [80, 81, 82, 83, 84, 85, 86],
  "Matt Special": [90, 91, 92, 93, 94, 95, 96],
};

const THICKNESSES = [13.6, 17.6, 19.6, 23.6, 26.6, 28.9, 38.9];
const BOARD_AREA = 3.05 * 1.3;
const DENSITY = 750;

export default function PriceCalculator() {
  const [thickness, setThickness] = useState(13.6);
  const [decor, setDecor] = useState("White");
  const [quantity, setQuantity] = useState(4);
  const [bottomSide, setBottomSide] = useState(false);
  const [result, setResult] = useState(null);

  const calculatePrice = () => {
    const thicknessIndex = THICKNESSES.indexOf(thickness);
    let basePrice = PRICE_TABLE[decor][thicknessIndex];

    if (quantity >= 4 && quantity <= 9) basePrice += 2.3;
    else if (quantity >= 10 && quantity <= 19) basePrice += 1.6;

    if (bottomSide) basePrice += 3;

    const pricePerBoard = basePrice * BOARD_AREA;
    let total = pricePerBoard * quantity;

    if (total < 1500) total += 250;
    else if (total >= 1500 && total <= 2500) total += total * 0.03;

    const thicknessMeters = thickness / 1000;
    const volumePerBoard = BOARD_AREA * thicknessMeters;
    const weightPerBoard = volumePerBoard * DENSITY;
    const totalWeight = weightPerBoard * quantity;

    return {
      basePrice,
      pricePerBoard: pricePerBoard.toFixed(2),
      total: total.toFixed(2),
      totalWeight: totalWeight.toFixed(1),
      weightPerBoard: weightPerBoard.toFixed(1),
    };
  };

  const handleCalculate = () => {
    const res = calculatePrice();
    setResult(res);
  };

  return (
    <section className="py-20 mt-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-10">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Product Price Calculator
          </h1>
          <p className="text-center text-gray-500 max-w-lg mx-auto">
            Configure your product dimensions and options to get an instant
            estimate.
          </p>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Layers size={18} /> Thickness (mm)
              </label>
              <select
                value={thickness}
                onChange={(e) => setThickness(parseFloat(e.target.value))}
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
              >
                {THICKNESSES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Palette size={18} /> Decor Range
              </label>
              <select
                value={decor}
                onChange={(e) => setDecor(e.target.value)}
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
              >
                {Object.keys(PRICE_TABLE).map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium text-gray-700">
                <Hash size={18} /> Quantity (pcs)
              </label>
              <input
                type="number"
                min={4}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400"
              />
              <p className="text-sm text-gray-400">
                * Minimum order is 4 pcs
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6">
              <input
                type="checkbox"
                checked={bottomSide}
                onChange={() => setBottomSide(!bottomSide)}
                className="w-5 h-5 rounded accent-blue-500"
              />
              <label className="flex items-center gap-2 text-gray-700">
                <CheckSquare size={18} /> Bottom Side in B Quality (+3 €/m²)
              </label>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <button
              onClick={handleCalculate}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition"
            >
              <Calculator size={20} /> Calculate Price
            </button>
          </div>

          {/* Results */}
          {result && (
            <motion.div
              key={JSON.stringify(result)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ResultCard result={result} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
