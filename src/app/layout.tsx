import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "MicroTools",
  description: "مجموعه‌ای رایگان از ابزارهای آنلاین — ساده، سریع، فارسی",
  icons: {
    icon: "/favicon.ico",
  },
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
        <MobileNav /> {/* ✅ Add mobile bottom nav */}
      </body>
    </html>
  );
}
