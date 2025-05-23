import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "MicroTools",
  description: "A collection of simple online tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
