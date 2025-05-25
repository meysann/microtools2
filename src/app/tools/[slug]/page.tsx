import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import dynamic from "next/dynamic";

interface Props {
  params: {
    slug: string;
  };
}

// Map slug → component
const toolComponents: Record<string, any> = {
  bmi: dynamic(() => import("@/components/tools/BmiCalculator")),
  "word-counter": dynamic(() => import("@/components/tools/WordCounter")),
};

export default function ToolPage({ params }: Props) {
  const tool = tools.find((tool) => tool.slug === params.slug);
  if (!tool) return notFound();

  const ToolComponent = toolComponents[tool.slug];

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <span>{tool.icon}</span>
        {tool.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>

      {ToolComponent ? (
        <ToolComponent />
      ) : (
        <p className="text-red-500">⚠️ ابزار هنوز آماده نیست.</p>
      )}
    </main>
  );
}
