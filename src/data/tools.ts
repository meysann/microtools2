import { Tool } from "@/types";
import AgeCalculator from "@/components/tools/AgeCalculator";
import BmiCalculator from "@/components/tools/BmiCalculator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import WordCounter from "@/components/tools/WordCounter";
import TemperatureConverter from "@/components/tools/TemperatureConverter";
import TimezoneConverter from "@/components/tools/TimezoneConverter";
import QrCodeGenerator from "@/components/tools/QrCodeGenerator";
import CurrencyConverter from "@/components/tools/CurrencyConverter";
import IpLookup from "@/components/tools/IpLookup";
import MarkdownPreviewer from "@/components/tools/MarkdownPreviewer";
import WeatherChecker from "@/components/tools/WeatherChecker";

export type ToolCategory =
  | "مبدل‌ها"
  | "محاسباتی"
  | "متنی"
  | "رمزنگاری"
  | "ابزار وب"
  | "ابزار AI";

export const tools: Tool[] = [
  {
    name: "ماشین حساب سن",
    slug: "age-calculator",
    icon: "🎂",
    category: "محاسباتی",
    description: "محاسبه سن دقیق با تقویم شمسی",
    component: "AgeCalculator",
  },
  {
    name: "ماشین حساب BMI",
    slug: "bmi",
    icon: "⚖️",
    category: "محاسباتی",
    description: "محاسبه شاخص توده بدنی (BMI)",
    component: "BmiCalculator",
  },
  {
    name: "تولید رمز عبور",
    slug: "password-generator",
    icon: "🔐",
    category: "رمزنگاری",
    description: "ساخت رمز عبور قوی و امن",
    component: "PasswordGenerator",
  },
  {
    name: "شمارنده کلمات",
    slug: "word-counter",
    icon: "✍️",
    category: "متنی",
    description: "شمارش کلمات، حروف، خطوط و کاراکترها",
    component: "WordCounter",
  },
  {
    name: "مبدل دما",
    slug: "temperature",
    icon: "🌡️",
    category: "مبدل‌ها",
    description: "تبدیل بین سلسیوس، فارنهایت و کلوین",
    component: "TemperatureConverter",
  },
  {
    name: "تبدیل زمان منطقه‌ای",
    slug: "timezone-converter",
    icon: "🌐",
    category: "مبدل‌ها",
    description: "تبدیل زمان بین مناطق مختلف جهان",
    component: "TimezoneConverter",
  },
  {
    name: "تولید QR Code",
    slug: "qr-code-generator",
    icon: "🔳",
    category: "ابزار وب",
    description: "ساخت بارکد QR از متن یا لینک",
    component: "QrCodeGenerator",
  },
  {
    name: "تبدیل ارز",
    slug: "currency-converter",
    icon: "💱",
    category: "مبدل‌ها",
    description: "تبدیل ارز با نرخ‌های زنده",
    component: "CurrencyConverter",
  },
  {
    name: "نمایش IP",
    slug: "ip-lookup",
    icon: "🌍",
    category: "ابزار وب",
    description: "بررسی IP و مکان جغرافیایی",
    component: "IpLookup",
  },
  {
    name: "پیش‌نمایش Markdown",
    slug: "markdown-previewer",
    icon: "📝",
    category: "متنی",
    description: "پیش‌نمایش زنده محتوای Markdown",
    component: "MarkdownPreviewer",
  },
  {
    name: "وضعیت آب و هوا",
    slug: "weather-checker",
    icon: "☁️",
    category: "ابزار وب",
    description: "اطلاع از وضعیت کنونی آب‌ و هوا",
    component: "WeatherChecker",
  },
];

export const toolComponents: Record<string, any> = {
  AgeCalculator,
  BmiCalculator,
  PasswordGenerator,
  WordCounter,
  TemperatureConverter,
  TimezoneConverter,
  QrCodeGenerator,
  CurrencyConverter,
  IpLookup,
  MarkdownPreviewer,
  WeatherChecker,
};
