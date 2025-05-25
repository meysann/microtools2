import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 py-6 border-t border-gray-300 dark:border-gray-700 text-sm text-center text-gray-600 dark:text-gray-400">
      <div className="max-w-4xl mx-auto space-y-2">
        <p>🛠 ابزارهای آنلاین رایگان | بدون نیاز به ثبت‌نام</p>
        <div className="space-x-4 rtl:space-x-reverse">
          <Link href="/" className="hover:underline">
            صفحه اصلی
          </Link>
          <Link href="/tools" className="hover:underline">
            لیست ابزارها
          </Link>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          © {new Date().getFullYear()} Meysam • MicroTools.ir
        </p>
      </div>
    </footer>
  );
}
