import { notFound } from "next/navigation";
import { tools, ToolCategory } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

interface Props {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: Props) {
  const decodedCategory = decodeURIComponent(params.category);
  const validCategories: ToolCategory[] = [
    "مبدل‌ها",
    "محاسباتی",
    "متنی",
    "رمزنگاری",
    "ابزار وب",
    "ابزار AI",
  ];

  if (!validCategories.includes(decodedCategory as ToolCategory)) {
    return notFound();
  }

  const filteredTools = tools.filter(
    (tool) => tool.category === decodedCategory
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-right">
        دسته‌بندی: {decodedCategory}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
