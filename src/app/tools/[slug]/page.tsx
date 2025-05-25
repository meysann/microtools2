import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

interface Props {
  params: {
    slug: string;
  };
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find((tool) => tool.slug === params.slug);

  if (!tool) return notFound();

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <span>{tool.icon}</span>
        {tool.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>

      <div className="mt-6">
        {/* You will later import the actual tool component here dynamically */}
        <p>🔧 ابزار در حال توسعه است...</p>
      </div>
    </main>
  );
}
