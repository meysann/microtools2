import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "MicroTools",
  description: "مجموعه‌ای از ابزارهای آنلاین ساده و کاربردی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir">
        <Header />
        {children}
      </body>
    </html>
  );
}
