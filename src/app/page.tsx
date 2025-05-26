"use client";

import Link from "next/link";
import { useState } from "react";
import { tools, ToolCategory } from "@/data/tools";

const categoryNames: ToolCategory[] = [
  "مبدل‌ها",
  "محاسباتی",
  "متنی",
  "رمزنگاری",
  "ابزار وب",
  "ابزار AI",
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) => {
    const q = search.toLowerCase();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  const categoryCounts = categoryNames.map((cat) => ({
    name: cat,
    count: tools.filter((tool) => tool.category === cat).length,
  }));

  return (
    <main className="bg-gray-50 dark:bg-slate-900 min-h-screen p-6 max-w-5xl mx-auto space-y-10 text-right">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
          🧰 ابزارها
        </h1>
        <p className="text-lg text-gray-600 dark:text-slate-400">
          مجموعه‌ای از ابزارهای رایگان و ساده برای محاسبه، تبدیل، بررسی متن و
          موارد دیگر — بدون نیاز به ثبت‌نام
        </p>
      </section>

      {/* Search */}
      <section className="space-y-6">
        <input
          type="text"
          placeholder="🔍 جستجو بین ابزارها..."
          className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white dark:placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Search Results or Default */}
      {search ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
            نتایج جستجو:
          </h2>
          {filteredTools.length === 0 ? (
            <p className="text-gray-500 dark:text-slate-400">
              هیچ ابزاری یافت نشد.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block p-4 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tool.name}
                    </span>
                    <span>{tool.icon}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          {/* Category Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
              📂 دسته‌بندی ابزارها
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categoryCounts.map((category) => (
                <Link
                  key={category.name}
                  href={`/tools/category/${encodeURIComponent(category.name)}`}
                  className="block p-4 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      {category.count} ابزار
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Tools */}
          <section>
            <h2 className="text-xl font-semibold mt-8 mb-4 text-blue-700 dark:text-blue-400">
              🌟 ابزارهای پر استفاده
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {tools.slice(0, 4).map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block p-3 rounded bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md transition text-center"
                >
                  <div className="text-3xl mb-1">{tool.icon}</div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {tool.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
