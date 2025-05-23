import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-xl font-bold">
          🧰 MicroTools
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/tools" className="hover:underline">
            Tools
          </Link>
        </div>
      </nav>
    </header>
  );
}
