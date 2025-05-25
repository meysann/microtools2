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
  component: string;
  tags?: string[];
}

export const tools: Tool[] = [
  {
    name: "ماشین حساب BMI",
    slug: "bmi",
    icon: "⚖️",
    category: "محاسباتی",
    description: "محاسبه شاخص توده بدنی (BMI)",
    component: "BmiCalculator",
    tags: ["BMI", "بدن", "شاخص"]
  },
  {
    name: "مبدل دما",
    slug: "temperature",
    icon: "🌡️",
    category: "مبدل‌ها",
    description: "تبدیل بین سلسیوس، فارنهایت و کلوین",
    component: "TemperatureConverter",
    tags: ["دما", "سلسیوس", "فار‌نهایت"]
  },
  {
    name: "شمارنده کلمات",
    slug: "word-counter",
    icon: "✍️",
    category: "متنی",
    description: "شمارش تعداد کلمات و حروف یک متن",
    component: "WordCounter",
    tags: ["متن", "word", "count"]
  },
  {
    name: "تولید رمز عبور",
    slug: "password-generator",
    icon: "🔐",
    category: "رمزنگاری",
    description: "تولید رمز عبور امن و تصادفی",
    component: "PasswordGenerator",
    tags: ["security", "password"]
  },
  {
    name: "تبدیل زمان منطقه‌ای",
    slug: "timezone-converter",
    icon: "🌐",
    category: "مبدل‌ها",
    description: "تبدیل زمان بین مناطق زمانی مختلف",
    component: "TimezoneConverter",
    tags: ["زمان", "ساعت", "جهانی"]
  },
  {
    name: "تولید QR Code",
    slug: "qr-code-generator",
    icon: "🔳",
    category: "ابزار وب",
    description: "ساخت QR Code از متن یا لینک",
    component: "QrCodeGenerator",
    tags: ["qr", "code", "بارکد"]
  },
  {
    name: "نمایش IP",
    slug: "ip-lookup",
    icon: "🌍",
    category: "ابزار وب",
    description: "اطلاعات IP کاربر و مکان تقریبی",
    component: "IpLookup",
    tags: ["ip", "geo", "ipinfo"]
  },
  {
    name: "پیش‌نمایش Markdown",
    slug: "markdown-previewer",
    icon: "📝",
    category: "متنی",
    description: "پیش‌نمایش زنده متن Markdown",
    component: "MarkdownPreviewer",
    tags: ["markdown", "render", "preview"]
  },
  {
    name: "ماشین حساب سن",
    slug: "age-calculator",
    icon: "🎂",
    category: "محاسباتی",
    description: "محاسبه سن دقیق با وارد کردن تاریخ تولد",
    component: "AgeCalculator",
    tags: ["سن", "تولد", "عمر"]
  },
  {
    name: "تبدیل ارز",
    slug: "currency-converter",
    icon: "💱",
    category: "مبدل‌ها",
    description: "تبدیل ارز با نرخ زنده",
    component: "CurrencyConverter",
    tags: ["ارز", "دلار", "یورو", "ریال"]
  },
  {
    name: "وضعیت آب‌ و هوا",
    slug: "weather-checker",
    icon: "☁️",
    category: "ابزار وب",
    description: "نمایش آب‌ و‌ هوای فعلی بر اساس موقعیت شما",
    component: "WeatherChecker",
    tags: ["آب‌وهوا", "آب و هوا", "آب‌ و‌ هوا"]
  }
];
