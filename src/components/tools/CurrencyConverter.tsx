"use client";

import { useEffect, useState } from "react";

const CURRENCIES = [
  { code: "USD", name: "دلار آمریکا" },
  { code: "EUR", name: "یورو" },
  { code: "IRR", name: "ریال ایران" },
  { code: "GBP", name: "پوند انگلیس" },
  { code: "JPY", name: "ین ژاپن" },
  { code: "CAD", name: "دلار کانادا" },
  { code: "TRY", name: "لیر ترکیه" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IRR");
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
        setError("نرخ تبدیل پیدا نشد.");
      }
    } catch {
      setResult(null);
      setError("❌ تبدیل ارز انجام نشد. لطفاً اتصال را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div className="space-y-6 max-w-md mx-auto text-right">
      <h2 className="text-xl font-bold">🔁 تبدیل ارز</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-semibold">مقدار:</label>
          <input
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">از ارز:</label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} - {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-semibold">به ارز:</label>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
        >
          {CURRENCIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code} - {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow text-center text-lg">
        {loading ? (
          <p className="text-blue-600">در حال تبدیل...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : result !== null ? (
          <p>
            {amount.toLocaleString()} {from} ={" "}
            <strong className="text-green-600">
              {result.toLocaleString()} {to}
            </strong>
          </p>
        ) : (
          <p className="text-gray-500">مقدار تبدیل نمایش داده می‌شود</p>
        )}
      </div>
    </div>
  );
}
