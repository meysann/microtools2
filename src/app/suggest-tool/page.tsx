// src/app/suggest-tool/page.tsx

export const metadata = {
  title: "پیشنهاد ابزار جدید | MicroTools",
  description:
    "پیشنهادات و ایده‌های خود را برای اضافه شدن ابزارهای جدید با ما به اشتراک بگذارید.",
};

export default function SuggestToolPage() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-right space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        پیشنهاد ابزار جدید
      </h1>

      <p className="text-gray-700 dark:text-gray-300">
        اگر ایده‌ای برای ابزار مفید دارید که فکر می‌کنید باید به سایت اضافه شود،
        لطفاً از طریق فرم زیر آن را ارسال کنید.
      </p>

      <form
        action="https://formspree.io/f/movdozgo
" // 🔁 Replace with your real Formspree endpoint
        method="POST"
        className="space-y-4 bg-white dark:bg-slate-800 p-4 rounded shadow"
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            نام ابزار پیشنهادی:
          </label>
          <input
            type="text"
            name="tool_name"
            required
            className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded dark:bg-slate-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">توضیحات:</label>
          <textarea
            name="description"
            rows={4}
            required
            className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded dark:bg-slate-900 dark:text-white"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            ایمیل یا راه ارتباطی (اختیاری):
          </label>
          <input
            type="text"
            name="contact"
            className="w-full p-2 border border-gray-300 dark:border-slate-600 rounded dark:bg-slate-900 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          ارسال پیشنهاد
        </button>
      </form>
    </main>
  );
}
