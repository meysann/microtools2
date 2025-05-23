"use client";
import { useState } from "react";

export default function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const convertHeightToCm = (feet: number, inches: number) =>
    feet * 30.48 + inches * 2.54;
  const convertWeightToKg = (lbs: number) => lbs * 0.453592;

  const calculateBMI = () => {
    let h: number, w: number;

    if (unit === "metric") {
      h = parseFloat(height);
      w = parseFloat(weight);
    } else {
      const [feet, inches] = height.split(".").map(Number);
      h = convertHeightToCm(feet, inches || 0);
      w = convertWeightToKg(parseFloat(weight));
    }

    if (!h || !w || h <= 0 || w <= 0) {
      setBmi(null);
      setCategory(null);
      return;
    }

    const result = w / (h / 100) ** 2;
    const rounded = parseFloat(result.toFixed(2));
    setBmi(rounded);
    setCategory(getCategory(rounded));
  };

  const getCategory = (bmi: number): string => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    if (bmi < 35) return "Obesity (Class 1)";
    if (bmi < 40) return "Obesity (Class 2)";
    return "Extreme Obesity";
  };

  const getColor = (): string => {
    if (!category) return "bg-gray-100";
    switch (category) {
      case "Underweight":
        return "bg-yellow-100 text-yellow-800";
      case "Normal weight":
        return "bg-green-100 text-green-800";
      case "Overweight":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory(null);
  };

  return (
    <div className="space-y-6 max-w-md">
      {/* Unit Toggle */}
      <div className="flex gap-4">
        <button
          className={`px-4 py-2 rounded ${
            unit === "metric" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUnit("metric")}
        >
          Metric (cm/kg)
        </button>
        <button
          className={`px-4 py-2 rounded ${
            unit === "imperial" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setUnit("imperial")}
        >
          Imperial (ft.in/lbs)
        </button>
      </div>

      {/* Input Fields */}
      <div className="flex flex-col gap-2">
        {unit === "metric" ? (
          <>
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border p-2 rounded"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Height (ft.in), e.g., 5.9"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Weight (lbs)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border p-2 rounded"
            />
          </>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={calculateBMI}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Calculate BMI
        </button>
        <button
          onClick={reset}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Reset
        </button>
      </div>

      {/* Result Display */}
      {bmi !== null && category && (
        <div className={`p-4 rounded shadow ${getColor()}`}>
          <p className="text-xl font-semibold">Your BMI: {bmi}</p>
          <p className="text-md">{category}</p>
        </div>
      )}

      {/* Info Box */}
      <div className="border rounded p-4 text-sm bg-gray-50">
        <h3 className="font-semibold mb-2">📊 BMI Categories:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Underweight: BMI &lt; 18.5</li>
          <li>Normal weight: 18.5 – 24.9</li>
          <li>Overweight: 25 – 29.9</li>
          <li>Obesity (Class 1): 30 – 34.9</li>
          <li>Obesity (Class 2): 35 – 39.9</li>
          <li>Extreme Obesity: 40+</li>
        </ul>
      </div>
    </div>
  );
}
