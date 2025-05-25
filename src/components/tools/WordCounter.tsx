"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="space-y-4">
      <textarea
        rows={6}
        placeholder="متن خود را اینجا وارد کنید..."
        className="w-full p-2 border rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>تعداد کلمات: {wordCount}</p>
      <p>تعداد کاراکترها: {charCount}</p>
    </div>
  );
}
