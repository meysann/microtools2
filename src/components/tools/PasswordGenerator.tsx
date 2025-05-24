"use client";
import { useState, useEffect } from "react";

const getRandomChar = {
  lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
  upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
  number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
  symbol: () => "!@#$%^&*()_+[]{}<>?/|".charAt(Math.floor(Math.random() * 20)),
};

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const [strength, setStrength] = useState("weak");

  useEffect(() => {
    if (!password) return;

    const score =
      (useLower ? 1 : 0) +
      (useUpper ? 1 : 0) +
      (useNumbers ? 1 : 0) +
      (useSymbols ? 1 : 0) +
      (length >= 16 ? 1 : 0);

    if (score >= 5) setStrength("strong");
    else if (score >= 3) setStrength("medium");
    else setStrength("weak");
  }, [password]);

  const generatePassword = () => {
    const types = [
      useLower && "lower",
      useUpper && "upper",
      useNumbers && "number",
      useSymbols && "symbol",
    ].filter(Boolean) as Array<keyof typeof getRandomChar>;

    if (types.length === 0) {
      setPassword("");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      result += getRandomChar[type]();
    }
    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getStrengthColor = () => {
    switch (strength) {
      case "strong":
        return "text-green-600";
      case "medium":
        return "text-yellow-500";
      default:
        return "text-red-500";
    }
  };

  return (
    <div className="space-y-6 max-w-md">
      {/* Length + Strength */}
      <div>
        <label className="font-medium">Length: {length}</label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-2 text-sm">
        <label>
          <input
            type="checkbox"
            checked={useLower}
            onChange={() => setUseLower(!useLower)}
          />{" "}
          Lowercase (a–z)
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={() => setUseUpper(!useUpper)}
          />{" "}
          Uppercase (A–Z)
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />{" "}
          Numbers (0–9)
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />{" "}
          Symbols (!@#...)
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={generatePassword}
          disabled={!useLower && !useUpper && !useNumbers && !useSymbols}
          className={`px-4 py-2 rounded text-white ${
            !useLower && !useUpper && !useNumbers && !useSymbols
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          Generate
        </button>

        {password && (
          <button
            onClick={() => setShow(!show)}
            className="text-sm text-blue-600 underline"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>

      {/* Password Display */}
      {password && (
        <div className="p-3 bg-gray-100 rounded shadow space-y-1">
          <div className="flex justify-between items-center">
            <span className="break-all font-mono text-sm">
              {show ? password : "*".repeat(password.length)}
            </span>
            <button onClick={copyToClipboard} className="text-blue-600 text-sm">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className={`text-xs font-medium ${getStrengthColor()}`}>
            Strength: {strength}
          </div>
        </div>
      )}
    </div>
  );
}
