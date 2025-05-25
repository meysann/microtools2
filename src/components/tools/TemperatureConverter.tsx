"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("celsius");

  const convert = (val: number, from: string, to: string): number => {
    if (from === to) return val;

    // Convert to Celsius first
    let c = val;
    if (from === "fahrenheit") c = (val - 32) * (5 / 9);
    else if (from === "kelvin") c = val - 273.15;

    // Convert from Celsius to target
    if (to === "fahrenheit") return c * (9 / 5) + 32;
    if (to === "kelvin") return c + 273.15;
    return c;
  };

  const temp = parseFloat(value) || 0;

  return (
    <div className="space-y-4">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="مقدار دما را وارد کنید"
        className="w-full p-2 border rounded"
      />

      <div className="flex flex-wrap gap-4">
        <label>
          <input
            type="radio"
            name="unit"
            value="celsius"
            checked={unit === "celsius"}
            onChange={() => setUnit("celsius")}
          />
          <span className="ml-2">سلسیوس</span>
        </label>
        <label>
          <input
            type="radio"
            name="unit"
            value="fahrenheit"
            checked={unit === "fahrenheit"}
            onChange={() => setUnit("fahrenheit")}
          />
          <span className="ml-2">فارنهایت</span>
        </label>
        <label>
          <input
            type="radio"
            name="unit"
            value="kelvin"
            checked={unit === "kelvin"}
            onChange={() => setUnit("kelvin")}
          />
          <span className="ml-2">کلوین</span>
        </label>
      </div>

      <div className="space-y-2">
        {["celsius", "fahrenheit", "kelvin"].map((u) => (
          <p key={u}>
            {u === "celsius" && "سلسیوس"}:{u === "fahrenheit" && "فارنهایت"}:
            {u === "kelvin" && "کلوین"}: {convert(temp, unit, u).toFixed(2)}
          </p>
        ))}
      </div>
    </div>
  );
}
