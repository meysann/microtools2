import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MicroTools",
  description: "مجموعه‌ای از ابزارهای ساده، رایگان و فارسی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
