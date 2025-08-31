import React, { useState } from "react";
import { motion } from "framer-motion";
import ResultCard from "./ResultCard";

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6">
          <h1 className="text-2xl font-bold text-center">Product Price Calculator</h1>

          {/* Input Fields */}
          <div className="space-y-4 md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block font-medium">Thickness (mm)</label>
              <select
                value={thickness}
                onChange={(e) => setThickness(parseFloat(e.target.value))}
                className="w-full p-2 border rounded"
              >
                {THICKNESSES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium">Decorrange</label>
              <select
                value={decor}
                onChange={(e) => setDecor(e.target.value)}
                className="w-full p-2 border rounded"
              >
                {Object.keys(PRICE_TABLE).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-medium">Quantity (pcs)</label>
              <input
                type="number"
                min={4}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full p-2 border rounded"
              />
              <p className="text-sm text-gray-500">* Minimum order is 4 pcs</p>
            </div>

            <div className="flex items-center space-x-2 mt-2 md:mt-6">
              <input
                type="checkbox"
                checked={bottomSide}
                onChange={() => setBottomSide(!bottomSide)}
              />
              <label>Bottom Side in B Quality (+3 €/m²)</label>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center">
            <button
              onClick={handleCalculate}
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-2xl font-semibold shadow-md transition"
            >
              Calculate Price
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
