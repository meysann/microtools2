import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { tools } from "@/data/tools";

interface Props {
  params: {
    slug: string;
  };
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug);

  if (!tool || !tool.component) return notFound();

  const ToolComponent = dynamic(() =>
    import(`@/components/tools/${tool.component}`).catch(() => {
      return () => (
        <p className="text-red-500">
          ⚠️ Component "{tool.component}" not found.
        </p>
      );
    })
  );

  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <span>{tool.icon}</span>
        {tool.name}
      </h1>
      <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
      <ToolComponent />
    </main>
  );
}
