"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = "";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    if (chars.length === 0) {
      setPassword("❌ لطفاً حداقل یک گزینه را فعال کنید");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  const getStrength = () => {
    let score = 0;
    if (includeLower) score++;
    if (includeUpper) score++;
    if (includeNumbers) score++;
    if (includeSymbols) score++;
    if (length >= 16) score++;

    if (score <= 2) return "ضعیف";
    if (score === 3) return "متوسط";
    return "قوی";
  };

  return (
    <div className="space-y-4 text-right max-w-lg mx-auto">
      <div className="space-y-2">
        <label className="block">طول رمز: {length} کاراکتر</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          <span>حروف کوچک (a-z)</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          <span>حروف بزرگ (A-Z)</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <span>اعداد (0-9)</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          <span>نمادها (!@#$)</span>
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        تولید رمز عبور
      </button>

      {password && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow space-y-2">
          <div className="font-mono text-lg break-all">{password}</div>
          <div className="flex justify-between items-center text-sm">
            <span>قدرت رمز: {getStrength()}</span>
            <button
              onClick={copyToClipboard}
              className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700"
            >
              {copied ? "کپی شد ✅" : "کپی در حافظه"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
