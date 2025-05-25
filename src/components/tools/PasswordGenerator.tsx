"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 12; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={generatePassword}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        تولید رمز عبور
      </button>
      {password && (
        <div className="p-2 border rounded bg-gray-100 dark:bg-gray-800">
          {password}
        </div>
      )}
    </div>
  );
}
