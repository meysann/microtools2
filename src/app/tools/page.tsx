import { tools } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function ToolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-right">ابزارها</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
