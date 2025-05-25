export type ToolCategory =
  | "مبدل‌ها"
  | "محاسباتی"
  | "متنی"
  | "رمزنگاری"
  | "ابزار وب"
  | "ابزار AI";

export interface Tool {
  name: string;
  slug: string;
  icon: string;
  category: ToolCategory;
  description: string;
  tags?: string[];
}

export const tools: Tool[] = [
  {
    name: "ماشین حساب BMI",
    slug: "bmi",
    icon: "⚖️",
    category: "محاسباتی",
    description: "محاسبه شاخص توده بدنی (BMI)",
    tags: ["سلامتی", "وزن", "توده بدنی", "BMI"],
  },
  {
    name: "مبدل دما",
    slug: "temperature",
    icon: "🌡️",
    category: "مبدل‌ها",
    description: "تبدیل بین سلسیوس، فارنهایت و کلوین",
    tags: ["دما", "converter", "celsius", "fahrenheit"],
  },
  {
    name: "شمارنده کلمات",
    slug: "word-counter",
    icon: "✍️",
    category: "متنی",
    description: "شمارش تعداد کلمات و حروف یک متن",
    tags: ["کلمه", "متن", "word count"],
  },
  {
    name: "تولید رمز عبور",
    slug: "password-generator",
    icon: "🔐",
    category: "رمزنگاری",
    description: "ساخت رمز عبور قوی با یک کلیک",
    tags: ["password", "security", "رمز", "generator"]
  }
];
