"use client";
import { useState, useEffect } from "react";

// Supported currencies by Frankfurter.app
const CURRENCIES = ["USD", "EUR", "IRR", "GBP", "JPY", "CAD", "TRY"];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convert = async () => {
    if (from === to) {
      setResult(amount);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await res.json();

      if (data.rates && data.rates[to]) {
        setResult(data.rates[to]);
      } else {
        setResult(null);
        setError("No rate found.");
      }
    } catch (err) {
      setResult(null);
      setError("Conversion failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-2">
        <input
          type="number"
          value={amount}
          min={0}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded w-1/2"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-2 rounded w-1/2"
        >
          {CURRENCIES.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <span>to</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-2 rounded w-full"
        >
          {CURRENCIES.map((cur) => (
            <option key={cur}>{cur}</option>
          ))}
        </select>
      </div>

      <div className="bg-gray-100 p-3 rounded shadow">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : result !== null ? (
          <p className="text-lg">
            {amount} {from} ={" "}
            <strong>
              {result.toFixed(2)} {to}
            </strong>
          </p>
        ) : (
          <p className="text-gray-500">No result yet</p>
        )}
      </div>
    </div>
  );
}
