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
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="flex gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={fetchForecast}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
        <button
          onClick={() => setUnit(unit === "c" ? "f" : "c")}
          className="bg-gray-200 px-3 py-2 rounded"
        >
          °{unit.toUpperCase()}
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {forecast && (
        <>
          <h2 className="text-xl font-bold">{location}</h2>

          {/* Daily Forecast */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {forecast?.daily?.time?.length > 0 &&
              forecast.daily.time.map((date: string, i: number) => (
                <div
                  key={i}
                  className="bg-blue-50 p-4 rounded shadow text-center"
                >
                  <p className="font-medium">
                    {new Date(date).toLocaleDateString()}
                  </p>
                  <div className="text-3xl">
                    {weatherIcons[forecast.daily.weathercode[i]] || "🌈"}
                  </div>
                  <p>
                    {convert(forecast.daily.temperature_2m_min[i]).toFixed(0)}°
                    / {convert(forecast.daily.temperature_2m_max[i]).toFixed(0)}
                    °
                  </p>
                  <p className="text-sm text-gray-600">
                    🌅{" "}
                    {new Date(forecast.daily.sunrise[i]).toLocaleTimeString()}
                  </p>
                  <p className="text-sm text-gray-600">
                    🌇 {new Date(forecast.daily.sunset[i]).toLocaleTimeString()}
                  </p>
                </div>
              ))}
          </div>

          {/* Hourly Forecast (next 24h) */}
          <h3 className="text-lg font-semibold mt-6">Next 24 Hours</h3>
          <div className="overflow-x-auto flex gap-3 pb-2">
            {forecast?.hourly?.time?.length > 0 &&
              forecast.hourly.time
                .slice(0, 24)
                .map((time: string, i: number) => (
                  <div
                    key={i}
                    className="min-w-[100px] p-2 border rounded text-center bg-white shadow"
                  >
                    <p className="text-xs">{new Date(time).getHours()}:00</p>
                    <div className="text-xl">
                      {weatherIcons[forecast.hourly.weathercode[i]] || "🌈"}
                    </div>
                    <p className="text-sm">
                      {convert(forecast.hourly.temperature_2m[i]).toFixed(0)}°
                    </p>
                    <p className="text-xs text-gray-500">
                      {forecast.hourly.relativehumidity_2m[i]}% 💧
                    </p>
                  </div>
                ))}
          </div>
        </>
      )}
    </div>
  );
}
