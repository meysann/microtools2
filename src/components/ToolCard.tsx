"use client";

import Link from "next/link";
import { Tool } from "@/data/tools";

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {tool.name}
        </h3>
        <span className="text-2xl">{tool.icon}</span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
        {tool.description}
      </p>

      <span className="inline-block text-xs text-gray-500 dark:text-gray-400 mt-1 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded">
        دسته: {tool.category}
      </span>
    </Link>
  );
}
