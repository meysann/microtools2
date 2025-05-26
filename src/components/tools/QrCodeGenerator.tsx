"use client";

import { useState } from "react";

export default function QrCodeGenerator() {
  const [input, setInput] = useState("https://google.com");
  const [showQR, setShowQR] = useState(false);

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    input
  )}&size=200x200`;

  const handleGenerate = () => {
    if (input.trim() !== "") {
      setShowQR(true);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="space-y-6 max-w-md mx-auto text-right">
      <h2 className="text-xl font-bold">📷 تولید کد QR</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="متن یا لینک خود را وارد کنید"
        className="w-full border p-2 rounded dark:bg-gray-800 dark:text-white"
      />

      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        ساخت کد QR
      </button>

      {showQR && (
        <div className="text-center space-y-4">
          <img
            src={qrUrl}
            alt="کد QR"
            className="mx-auto border rounded shadow"
          />
          <button
            onClick={handleDownload}
            className="text-blue-600 hover:underline text-sm"
          >
            📥 دانلود کد QR به صورت PNG
          </button>
        </div>
      )}
    </div>
  );
}
