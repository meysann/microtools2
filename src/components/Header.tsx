"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { tools } from "@/data/tools";
import ThemeToggle from "./ThemeToggle";

type GroupedTools = Record<string, typeof tools>;

const groupByCategory = (): GroupedTools => {
  const grouped: GroupedTools = {};
  tools.forEach((tool) => {
    if (!grouped[tool.category]) grouped[tool.category] = [];
    grouped[tool.category].push(tool);
  });
  return grouped;
};

export default function Header() {
  const groupedTools = groupByCategory();
  const categories = Object.keys(groupedTools);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const openMenu = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMenuOpen(true);
  };

  const closeMenuWithDelay = () => {
    timerRef.current = setTimeout(() => {
      setMenuOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  return (
    <header className="bg-white dark:bg-slate-900 shadow sticky top-0 z-50">
      <nav
        className="max-w-6xl mx-auto flex justify-between items-center p-4 text-sm"
        dir="rtl"
      >
        <div className="flex items-center gap-6 relative">
          <Link
            href="/"
            className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1"
          >
            🧰 <span>ابزارها</span>
          </Link>

          <Link
            href="/"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            صفحه اصلی
          </Link>

          <Link
            href="/tools"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            همه ابزارها
          </Link>

          {hasMounted && (
            <div
              className="relative"
              onMouseEnter={openMenu}
              onMouseLeave={closeMenuWithDelay}
            >
              <button className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                دسته‌بندی ابزارها ⌄
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-[750px] h-[300px] bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded shadow-lg z-50 grid grid-cols-2 text-right overflow-hidden">
                  <div className="p-4 border-l border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900">
                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                      دسته‌بندی‌ها
                    </h4>
                    <ul className="space-y-2">
                      {categories.map((cat) => (
                        <li
                          key={cat}
                          className={`cursor-pointer px-3 py-1 rounded hover:bg-blue-100 dark:hover:bg-slate-700 ${
                            activeCategory === cat
                              ? "bg-blue-100 dark:bg-slate-700"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveCategory(cat)}
                        >
                          {cat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {activeCategory || "ابزارها"}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {activeCategory &&
                        groupedTools[activeCategory]?.map((tool) => (
                          <li key={tool.slug}>
                            <Link
                              href={`/tools/${tool.slug}`}
                              className="text-gray-700 dark:text-slate-100 hover:text-blue-500 dark:hover:text-blue-300 block"
                            >
                              {tool.icon} {tool.name}
                            </Link>
                          </li>
                        ))}
                      {!activeCategory && (
                        <li className="text-gray-400 text-xs">
                          یک دسته را انتخاب کنید.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          <Link
            href="/about"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            درباره ما
          </Link>
          <Link
            href="/suggest-tool"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            پیشنهاد ابزار
          </Link>
          <Link
            href="/donate"
            className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          >
            حمایت ❤️
          </Link>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}
