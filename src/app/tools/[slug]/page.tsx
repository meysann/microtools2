import { tools } from "@/tools";
import { notFound } from "next/navigation";
import BmiCalculator from "@/components/tools/BmiCalculator";
import WeatherChecker from "@/components/tools/WeatherChecker";
import IpLookup from "@/components/tools/IpLookup";

type Props = {
  params: { slug: string };
};

export default function ToolPage({ params }: Props) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {tool.icon} {tool.name}
      </h1>

      {tool.slug === "bmi" && <BmiCalculator />}
      {tool.slug === "weather" && <WeatherChecker />}
      {tool.slug === "ip-lookup" && <IpLookup />}
      {!["bmi", "weather", "ip-lookup"].includes(tool.slug) && (
        <p className="text-gray-500">
          Component for "{tool.name}" coming soon...
        </p>
      )}
    </div>
  );
}
