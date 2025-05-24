export interface Tool {
    name: string;
    slug: string;
    icon: string; // Emoji or icon string for UI
  }
  
  export const tools: Tool[] = [
    { name: "BMI Calculator", slug: "bmi", icon: "⚖️" },
    { name: "Weather Checker", slug: "weather", icon: "⛅" },
    { name: "IP Info Lookup", slug: "ip-lookup", icon: "🌐" },
    { name: "Currency Converter", slug: "currency", icon: "💱" },
    { name: "QR Code Generator", slug: "qr", icon: "🔳" },
    { name: "Markdown Previewer", slug: "markdown", icon: "📝" },
    { name: "Password Generator", slug: "password", icon: "🔐" },
    { name: "Age Calculator", slug: "age", icon: "🎂" },
    { name: "Timezone Converter", slug: "timezone", icon: "🌍" },
    { name: "Text Summarizer", slug: "summarizer", icon: "🧠" },
  ];
  