"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPopular = () => {
    const el = document.getElementById("popular-tools");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 🔹 Bottom Nav Bar */}
      <nav className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-sm flex justify-around py-2 md:hidden z-40">
        <Link href="/" className="text-center">
          <div>🏠</div>
          <div>خانه</div>
        </Link>
        <Link href="/tools" className="text-center">
          <div>🧰</div>
          <div>ابزارها</div>
        </Link>
        <Link href="/#categories" className="text-center">
          <div>🗂️</div>
          <div>دسته‌ها</div>
        </Link>
      </nav>

      {/* 🔹 FAB */}
      {showFab && (
        <div className="fixed bottom-20 right-4 flex flex-col gap-2 z-50 md:hidden">
          <button
            onClick={scrollToPopular}
            className="bg-yellow-400 text-black rounded-full px-4 py-2 text-xs shadow hover:bg-yellow-300"
          >
            محبوب‌ترین ابزارها
          </button>
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white rounded-full px-4 py-2 text-xs shadow hover:bg-blue-500"
          >
            🔝 بالا
          </button>
        </div>
      )}
    </>
  );
}
