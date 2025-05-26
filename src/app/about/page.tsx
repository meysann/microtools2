export const metadata = {
  title: "درباره ما - MicroTools",
  description: "درباره توسعه‌دهنده و هدف ابزارها",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6 text-right">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        🧑‍💻 درباره MicroTools
      </h1>

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        MicroTools مجموعه‌ای از ابزارهای ساده و کاربردی است که برای کاربران
        فارسی‌زبان ساخته شده تا بدون نیاز به نصب برنامه یا ثبت‌نام، بتوانند
        محاسبه، تبدیل، بررسی و مدیریت داده‌های روزمره را انجام دهند.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">
        🎯 هدف ما
      </h2>
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        ساخت مجموعه‌ای جامع از ابزارها با رابط کاربری ساده، پشتیبانی کامل از
        زبان فارسی و تمرکز روی کاربردی بودن و سرعت اجرا — برای استفاده در
        موبایل، دسکتاپ و هر جایی که نیاز باشد.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-gray-800 dark:text-white">
        👤 توسعه‌دهنده
      </h2>
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
        این سایت توسط <strong>میثم محمدپور</strong> ساخته شده؛ علاقه‌مند به
        توسعه وب، ابزارهای کاربردی و هوش مصنوعی. برای ارتباط، ایده یا همکاری
        می‌توانید به{" "}
        <a
          href="https://github.com/meysann"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>{" "}
        من مراجعه کنید.
      </p>
    </main>
  );
}
