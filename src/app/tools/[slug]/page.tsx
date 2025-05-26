import { notFound } from "next/navigation";
import { tools, toolComponents } from "@/data/tools";

type Props = {
  params: { slug: string };
};

export default function ToolPage({ params }: Props) {
  const slug = params.slug;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool || !tool.component) return notFound();

  const ToolComponent = toolComponents[tool.component];
  if (!ToolComponent) return notFound();

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4 text-right">
      <h1 className="text-2xl font-bold">{tool.name}</h1>
      <ToolComponent />
    </div>
  );
}
