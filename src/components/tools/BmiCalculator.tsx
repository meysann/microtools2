"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    let w = parseFloat(weight);
    let h = parseFloat(height);

    if (!w || !h) {
      setBmi(null);
      return;
    }

    // Convert to metric
    if (weightUnit === "lb") w = w * 0.453592;
    if (heightUnit === "in") h = h * 2.54;
    h = h / 100; // cm to meters

    const result = w / (h * h);
    setBmi(parseFloat(result.toFixed(2)));
  };

  const getStatus = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "کم‌وزن";
    if (bmi < 24.9) return "وزن نرمال";
    if (bmi < 29.9) return "اضافه‌وزن";
    if (bmi < 34.9) return "چاق";
    return "چاقی شدید";
  };

  const getStatusColor = () => {
    if (bmi === null) return "";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 24.9) return "text-green-600";
    if (bmi < 29.9) return "text-yellow-600";
    if (bmi < 34.9) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-4 text-right">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">وزن</label>
          <input
            type="number"
            placeholder="مثلاً ۷۰"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-2 border rounded text-right"
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="kg">کیلوگرم</option>
            <option value="lb">پوند</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">قد</label>
          <input
            type="number"
            placeholder="مثلاً ۱۷۵"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-2 border rounded text-right"
          />
          <select
            value={heightUnit}
            onChange={(e) => setHeightUnit(e.target.value)}
            className="w-full mt-2 p-2 border rounded"
          >
            <option value="cm">سانتی‌متر</option>
            <option value="in">اینچ</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded"
      >
        محاسبه شاخص توده بدنی (BMI)
      </button>

      {bmi !== null && (
        <div className="text-center mt-4 space-y-2">
          <p className="text-xl font-bold">
            BMI شما: <span className="text-black dark:text-white">{bmi}</span>
          </p>
          <p className={`text-lg font-bold ${getStatusColor()}`}>
            وضعیت: {getStatus()}
          </p>
        </div>
      )}
    </div>
  );
}
