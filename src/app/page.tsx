import Link from "next/link";
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
  // Count tools per category
  const categoryCounts = categoryNames.map((cat) => ({
    name: cat,
    count: tools.filter((tool) => tool.category === cat).length,
  }));

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-10 text-right">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">👋 به ابزارها خوش آمدید</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          مجموعه‌ای رایگان از ابزارهای آنلاین برای تبدیل، محاسبه، متن، و بیشتر —
          بدون نیاز به ثبت‌نام!
        </p>
      </section>

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
    </main>
  );
}
