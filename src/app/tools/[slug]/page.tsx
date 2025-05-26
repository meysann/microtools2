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

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${tool.name} - ابزار ${tool.category}`}
        />
        <meta property="og:description" content={tool.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`http://localhost:3000/tools/${tool.slug}`}
        />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="ابزارها" />
        <meta
          property="og:image"
          content={`http://localhost:3000/og/${tool.slug}.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${tool.name} - ابزار ${tool.category}`}
        />
        <meta name="twitter:description" content={tool.description} />
        <meta
          name="twitter:image"
          content={`http://localhost:3000/og/${tool.slug}.png`}
        />
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
