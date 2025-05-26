"use client";

import { useState } from "react";

export default function IpLookup() {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIPInfo = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/ipinfo?ip=${ip}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setInfo(data.ipinfo);
    } catch (err: any) {
      setError("❌ دریافت اطلاعات IP انجام نشد.");
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-md mx-auto text-right">
      <h2 className="text-xl font-bold">🌐 جستجوی اطلاعات IP</h2>

      <div className="flex gap-2">
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="آدرس IP را وارد کنید"
          className="border p-2 rounded w-full dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={fetchIPInfo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          بررسی
        </button>
      </div>

      {loading && <p className="text-gray-600">در حال دریافت اطلاعات...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {info && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow space-y-2 text-sm sm:text-base">
          <p>
            <strong>آی‌پی:</strong> {info.ip}
          </p>
          <p>
            <strong>شهر:</strong> {info.city}
          </p>
          <p>
            <strong>استان / منطقه:</strong> {info.region}
          </p>
          <p>
            <strong>کشور:</strong> {info.country_name}
          </p>
          <p>
            <strong>ارائه‌دهنده (سازمان):</strong> {info.org}
          </p>
          <p>
            <strong>منطقه زمانی:</strong> {info.timezone}
          </p>
          <p>
            <strong>موقعیت جغرافیایی:</strong> {info.latitude}, {info.longitude}
          </p>
        </div>
      )}
    </div>
  );
}
