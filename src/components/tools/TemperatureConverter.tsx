"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("celsius");

  const convert = (val: number, from: string, to: string): number => {
    if (from === to) return val;

    let c = val;
    if (from === "fahrenheit") c = (val - 32) * (5 / 9);
    else if (from === "kelvin") c = val - 273.15;

    if (to === "fahrenheit") return c * (9 / 5) + 32;
    if (to === "kelvin") return c + 273.15;
    return c;
  };

  const units = [
    { key: "celsius", label: "سلسیوس", symbol: "°C" },
    { key: "fahrenheit", label: "فارنهایت", symbol: "°F" },
    { key: "kelvin", label: "کلوین", symbol: "K" },
  ];

  const temp = parseFloat(value) || 0;
  const tempC = convert(temp, unit, "celsius");

  // Define range from -273°C to 200°C
  const min = -273.15;
  const max = 200;
  const clamped = Math.min(Math.max(tempC, min), max);
  const percent = ((clamped - min) / (max - min)) * 100;

  return (
    <div className="space-y-6 max-w-xl mx-auto text-right">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="مقدار دما را وارد کنید"
        className="w-full p-3 border rounded text-right dark:bg-gray-800 dark:text-white"
      />

      <div className="flex flex-wrap gap-4">
        {units.map((u) => (
          <label key={u.key} className="flex items-center gap-2">
            <input
              type="radio"
              name="unit"
              value={u.key}
              checked={unit === u.key}
              onChange={() => setUnit(u.key)}
            />
            <span>{u.label}</span>
          </label>
        ))}
      </div>

      <div className="space-y-2 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
        {units.map((u) => (
          <p key={u.key} className="text-sm md:text-base">
            <strong>
              {u.label} ({u.symbol}):
            </strong>{" "}
            {convert(temp, unit, u.key).toFixed(2)}
          </p>
        ))}
      </div>

      {/* 📊 Improved Visual Temperature Scale */}
      <div className="space-y-2 mt-6">
        <label className="block text-sm text-gray-700 dark:text-gray-300 font-semibold">
          📊 نمایش موقعیت دما روی مقیاس
        </label>

        <div className="relative h-6 bg-gradient-to-l from-red-600 via-yellow-400 to-blue-500 rounded-full overflow-hidden shadow-inner">
          <div
            className="absolute top-0 bottom-0 w-1 bg-black"
            style={{ right: `${percent}%` }}
          />
          <div
            className="absolute -top-8 text-xs text-black dark:text-white"
            style={{ right: `${percent}%`, transform: "translateX(50%)" }}
          >
            {tempC.toFixed(1)}°C
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2 px-1">
          <span>۲۰۰°</span>
          <span>۱۰۰° (جوش)</span>
          <span>۲۵° (اتاق)</span>
          <span>۰° (یخ‌زدن)</span>
          <span>-۲۷۳° (صفر مطلق)</span>
        </div>
      </div>
    </div>
  );
}
