import Link from "next/link";
import { Tool } from "../tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block border rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <div className="text-3xl">{tool.icon}</div>
      <div className="font-semibold mt-2">{tool.name}</div>
    </Link>
  );
}
