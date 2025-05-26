"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "خانه", icon: "🏠" },
  { href: "/tools", label: "ابزارها", icon: "🧰" },
  { href: "#popular", label: "محبوب‌ها", icon: "🌟" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 sm:hidden z-50">
      <div className="flex justify-around items-center text-sm text-center h-14">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center ${
              pathname === item.href
                ? "text-blue-600 dark:text-blue-400 font-bold"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
