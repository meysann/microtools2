"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const trimmed = text.trim();

  const wordCount = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount =
    trimmed === "" ? 0 : trimmed.split(/[.!؟!]\s*/).filter(Boolean).length;
  const paragraphCount =
    trimmed === "" ? 0 : trimmed.split(/\n{2,}/).filter(Boolean).length;
  const lineCount = text.split("\n").length;

  const clearText = () => {
    setText("");
  };

  return (
    <div className="space-y-4 text-right max-w-3xl mx-auto">
      <textarea
        rows={8}
        placeholder="متن خود را اینجا وارد کنید..."
        className="w-full p-3 border rounded resize-none dark:bg-gray-800 dark:text-white"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          📝 <strong>کلمات:</strong> {wordCount}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          🔤 <strong>کاراکترها:</strong> {charCount}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          📌 <strong>جملات:</strong> {sentenceCount}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          📄 <strong>پاراگراف‌ها:</strong> {paragraphCount}
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
          📏 <strong>خطوط:</strong> {lineCount}
        </div>
      </div>

      <button
        onClick={clearText}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        پاک‌سازی متن
      </button>
    </div>
  );
}
