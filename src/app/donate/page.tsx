// src/app/donate/page.tsx

export const metadata = {
  title: "حمایت مالی | MicroTools",
  description:
    "اگر ابزارها برایتان مفید بودند، با حمایت مالی کوچک به توسعه و ادامه آن کمک کنید.",
};

export default function DonatePage() {
  return (
    <main className="max-w-2xl mx-auto p-6 text-right space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
        ❤️ حمایت مالی از MicroTools
      </h1>

      <p className="text-gray-700 dark:text-gray-300">
        اگر ابزارهای ما برایتان مفید بوده، با حمایت مالی می‌توانید به توسعه
        ابزارهای بیشتر کمک کنید. 🙏
      </p>

      {/* Zarinpal */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow space-y-2">
        <h2 className="text-xl font-semibold text-green-600">درگاه زرین‌پال</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          پرداخت امن ریالی با استفاده از درگاه زرین‌پال:
        </p>
        <a
          href="https://zarinp.al/meysam" // 🔁 Replace with your actual Zarinpal link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 font-semibold"
        >
          حمایت از طریق زرین‌پال
        </a>
      </section>

      {/* Crypto */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow space-y-2">
        <h2 className="text-xl font-semibold text-purple-600">
          پرداخت با کریپتو
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          آدرس تتر (TRC20):
        </p>
        <div className="bg-gray-100 dark:bg-slate-900 p-2 rounded font-mono text-sm">
          TJKwoSx4LkDpe3jDfFjSn2jYXvmFxZnaRU
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          اگر پرداخت کردید، لطفاً اطلاع دهید.
        </p>
      </section>

      {/* Optional: BuyMeACoffee */}
      <section className="bg-white dark:bg-slate-800 p-4 rounded shadow space-y-2">
        <h2 className="text-xl font-semibold text-pink-600">حمایت خارجی</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          اگر در خارج هستید می‌توانید از طریق buymeacoffee یا مشابه حمایت کنید.
        </p>
        <a
          href="https://buymeacoffee.com/meysam" // 🔁 Optional: Replace with real if you have
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Buy Me a Coffee ☕
        </a>
      </section>
    </main>
  );
}
