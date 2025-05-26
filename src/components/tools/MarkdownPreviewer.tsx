"use client";

import { useState } from "react";
import { marked } from "marked";

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(
    "# سلام، مارک‌داون!\n\nاینجا چیزی بنویسید..."
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto text-right">
      <h2 className="text-xl font-bold">📄 پیش‌نمایش مارک‌داون</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Input area */}
        <textarea
          value={markdown}
          onChange={handleChange}
          dir="rtl"
          className="w-full md:w-1/2 p-3 border rounded h-[300px] font-mono resize-none dark:bg-gray-800 dark:text-white"
          placeholder="مارک‌داون خود را اینجا وارد کنید..."
        />

        {/* Rendered output */}
        <div
          className="w-full md:w-1/2 p-4 border rounded bg-white dark:bg-gray-900 dark:text-white prose prose-sm sm:prose lg:prose-lg max-w-none overflow-y-auto text-right"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}
