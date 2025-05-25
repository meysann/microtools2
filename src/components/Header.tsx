"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav
        className="flex justify-between items-center max-w-4xl mx-auto"
        dir="rtl"
      >
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold">
            🧰 ابزارها
          </Link>
          <Link href="/" className="hover:underline">
            صفحه اصلی
          </Link>
          <Link href="/tools" className="hover:underline">
            ابزارها
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
