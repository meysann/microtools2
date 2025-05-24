"use client";
import { useState } from "react";
import { marked } from "marked";

export default function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(
    "# Hello, Markdown!\n\nType something..."
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Input area */}
      <textarea
        value={markdown}
        onChange={handleChange}
        className="w-full md:w-1/2 p-3 border rounded h-[300px] font-mono resize-none"
        placeholder="Type markdown here..."
      />

      {/* Rendered output */}
      <div
        className="w-full md:w-1/2 p-3 border rounded bg-white prose max-w-none overflow-y-auto"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}
