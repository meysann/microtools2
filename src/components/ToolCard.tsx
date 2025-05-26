"use client";

import Link from "next/link";
import { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  const categoryColors: Record<string, string> = {
    مبدل‌ها: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900",
    محاسباتی:
      "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
    متنی: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
    رمزنگاری: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
    "ابزار وب":
      "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
    "ابزار AI": "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",
  };

  const badgeStyle =
    categoryColors[tool.category] || "bg-gray-100 text-gray-800";

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-300 hover:scale-[1.015] transition-all duration-200 bg-white dark:bg-gray-800 space-y-3"
    >
      <div className="flex justify-between items-center">
        <div className="text-3xl">{tool.icon}</div>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyle}`}
        >
          {tool.category}
        </span>
      </div>

      <h2 className="text-lg font-bold text-gray-800 dark:text-white">
        {tool.name}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 line-clamp-2">
        {tool.description}
      </p>
    </Link>
  );
}
