import { tools } from "@/tools";
import { notFound } from "next/navigation";
import BmiCalculator from "@/components/tools/BmiCalculator";
import WeatherChecker from "@/components/tools/WeatherChecker";
import IpLookup from "@/components/tools/IpLookup";
import AgeCalculator from "@/components/tools/AgeCalculator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import MarkdownPreviewer from "@/components/tools/MarkdownPreviewer";
import QrCodeGenerator from "@/components/tools/QrCodeGenerator";
import CurrencyConverter from "@/components/tools/CurrencyConverter";
import TimezoneConverter from "@/components/tools/TimezoneConverter";
import TextSummarizer from "@/components/tools/TextSummarizer";


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

      {/* Render tool component based on slug */}
      {tool.slug === "bmi" && <BmiCalculator />}
      {tool.slug === "weather" && <WeatherChecker />}
      {tool.slug === "ip-lookup" && <IpLookup />}
      {tool.slug === "age" && <AgeCalculator />}
      {tool.slug === "password" && <PasswordGenerator />}
      {tool.slug === "markdown" && <MarkdownPreviewer />}
      {tool.slug === "qr" && <QrCodeGenerator />}
      {tool.slug === "currency" && <CurrencyConverter />}
      {tool.slug === "timezone" && <TimezoneConverter />}
      {tool.slug === "summarizer" && <TextSummarizer />}

      {/* Fallback if component is not yet created */}
      {![
        "bmi",
        "weather",
        "ip-lookup",
        "age",
        "password",
        "markdown",
        "qr",
        "currency",
        "timezone",
        "summarizer",
      ].includes(tool.slug) && (
        <p className="text-gray-500">
          Component for <strong>{tool.name}</strong> coming soon...
        </p>
      )}
    </div>
  );
}
