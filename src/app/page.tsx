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

  const popularToolSlugs = ["bmi", "word-counter", "temperature"];
  const popularTools = tools.filter((tool) =>
    popularToolSlugs.includes(tool.slug)
  );

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-10 text-right">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">👋 به ابزارها خوش آمدید</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          مجموعه‌ای رایگان از ابزارهای آنلاین برای تبدیل، محاسبه، متن، و بیشتر —
          بدون نیاز به ثبت‌نام!
        </p>
      </section>

      <section className="space-y-6">
        <input
          type="text"
          placeholder="جستجو بین ابزارها..."
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {search ? (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">نتایج جستجو:</h2>
          {filteredTools.length === 0 ? (
            <p className="text-gray-500">هیچ ابزاری یافت نشد.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block p-4 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <div className="flex justify-between items-center">
                    <span>{tool.name}</span>
                    <span>{tool.icon}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section>
            <h2 className="text-2xl font-semibold mb-4">دسته‌بندی ابزارها</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {categoryCounts.map((category) => (
                <Link
                  key={category.name}
                  href={`/tools/category/${encodeURIComponent(category.name)}`}
                  className="block p-4 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {category.count} ابزار
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">محبوب‌ترین ابزارها</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {popularTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="block p-4 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <div className="flex justify-between items-center">
                    <span>{tool.name}</span>
                    <span>{tool.icon}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {tool.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
