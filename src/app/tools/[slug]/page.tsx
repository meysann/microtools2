import { notFound } from "next/navigation";
import Head from "next/head";
import { tools } from "@/data/tools";
import ToolLoader from "@/components/ToolLoader";

interface Props {
  params: { slug: string };
}

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool || !tool.component) return notFound();

  return (
    <>
      <Head>
        <title>
          {tool.name} - ابزار {tool.category}
        </title>
        <meta name="description" content={tool.description} />
      </Head>

      <div className="p-6 max-w-4xl mx-auto space-y-6 text-right">
        <h1 className="text-2xl font-bold">
          {tool.icon} {tool.name}
        </h1>
        <ToolLoader componentName={tool.component} />
      </div>
    </>
  );
}
