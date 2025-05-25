"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w && h) {
      const bmi = w / (h * h);
      setResult(parseFloat(bmi.toFixed(2)));
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="number"
        placeholder="وزن (کیلوگرم)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="قد (سانتی‌متر)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        onClick={calculateBMI}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        محاسبه BMI
      </button>
      {result && <p className="text-lg font-bold">شاخص توده بدنی: {result}</p>}
    </div>
  );
}
