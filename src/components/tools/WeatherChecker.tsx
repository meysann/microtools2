"use client";

import { useState } from "react";

const weatherIcons: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  61: "🌧️",
  71: "❄️",
  80: "⛈️",
};

export default function WeatherChecker() {
  const [city, setCity] = useState("Tehran");
  const [unit, setUnit] = useState<"c" | "f">("c");
  const [forecast, setForecast] = useState<any>(null);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convert = (tempC: number) =>
    unit === "f" ? (tempC * 9) / 5 + 32 : tempC;

  const fetchForecast = async () => {
    setLoading(true);
    setError("");
    setForecast(null);
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setForecast(data);
      setLocation(data.location);
    } catch (err: any) {
      setError("❌ دریافت اطلاعات هواشناسی انجام نشد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto text-right">
      <h2 className="text-xl font-bold">🌦️ بررسی وضعیت آب‌وهوا</h2>

      <div className="flex flex-wrap gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="نام شهر را وارد کنید"
          className="border p-2 rounded w-full md:w-1/2 dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={fetchForecast}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          جستجو
        </button>
        <button
          onClick={() => setUnit(unit === "c" ? "f" : "c")}
          className="bg-gray-200 px-3 py-2 rounded"
        >
          °{unit === "c" ? "C" : "F"}
        </button>
      </div>

      {loading && <p className="text-blue-600">در حال بارگذاری...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {forecast && (
        <>
          <h3 className="text-lg font-semibold">{location}</h3>

          {/* Daily Forecast */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
            {forecast.daily.time.map((date: string, i: number) => (
              <div
                key={i}
                className="bg-blue-50 p-4 rounded shadow text-center"
              >
                <p className="font-semibold text-sm text-gray-700">
                  {new Date(date).toLocaleDateString("fa-IR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </p>
                <div className="text-3xl">
                  {weatherIcons[forecast.daily.weathercode[i]] || "🌈"}
                </div>
                <p className="text-sm mt-2">
                  {convert(forecast.daily.temperature_2m_min[i]).toFixed(0)}° /{" "}
                  {convert(forecast.daily.temperature_2m_max[i]).toFixed(0)}°
                </p>
                <p className="text-xs text-gray-600">
                  🌅{" "}
                  {new Date(forecast.daily.sunrise[i]).toLocaleTimeString(
                    "fa-IR",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>
                <p className="text-xs text-gray-600">
                  🌇{" "}
                  {new Date(forecast.daily.sunset[i]).toLocaleTimeString(
                    "fa-IR",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Hourly Forecast */}
          <h4 className="text-md font-bold mt-6">۲۴ ساعت آینده</h4>
          <div className="overflow-x-auto flex gap-3 pb-2 mt-2">
            {forecast.hourly.time
              .slice(0, 24)
              .map((time: string, i: number) => (
                <div
                  key={i}
                  className="min-w-[90px] bg-white dark:bg-gray-700 border rounded shadow p-2 text-center"
                >
                  <p className="text-xs text-gray-600">
                    {new Date(time).toLocaleTimeString("fa-IR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <div className="text-xl my-1">
                    {weatherIcons[forecast.hourly.weathercode[i]] || "🌈"}
                  </div>
                  <p className="text-sm">
                    {convert(forecast.hourly.temperature_2m[i]).toFixed(0)}°
                  </p>
                  <p className="text-xs text-gray-500">
                    💧 {forecast.hourly.relativehumidity_2m[i]}٪
                  </p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
