"use client";
import { useEffect, useState } from "react";

const API_KEY = "TM1OBU4XA1WU"; // ⬅️ Replace with your real key
const BASE_URL = "https://api.timezonedb.com/v2.1";

const TIMEZONES = [
  "Asia/Tehran",
  "Asia/Dubai",
  "Europe/London",
  "Europe/Berlin",
  "Asia/Tokyo",
  "America/New_York",
  "America/Los_Angeles",
  "Asia/Kolkata",
  "UTC",
];

export default function TimezoneConverter() {
  const [fromZone, setFromZone] = useState("Asia/Tehran");
  const [toZone, setToZone] = useState("Europe/London");
  const [fromTime, setFromTime] = useState(
    new Date().toISOString().slice(0, 16)
  );
  const [converted, setConverted] = useState("");
  const [fromNow, setFromNow] = useState("");
  const [toNow, setToNow] = useState("");
  const [error, setError] = useState("");

  const fetchZoneInfo = async (zone: string) => {
    const res = await fetch(
      `${BASE_URL}/get-time-zone?key=${API_KEY}&format=json&by=zone&zone=${zone}`
    );
    return res.json();
  };

  const convertTime = async () => {
    setError("");
    try {
      const [fromData, toData] = await Promise.all([
        fetchZoneInfo(fromZone),
        fetchZoneInfo(toZone),
      ]);

      if (fromData.status !== "OK" || toData.status !== "OK") {
        throw new Error("Invalid response");
      }

      const fromDate = new Date(`${fromTime}:00`);
      const fromOffsetSec = fromData.gmtOffset;
      const toOffsetSec = toData.gmtOffset;

      const utcTime = fromDate.getTime() - fromOffsetSec * 1000;
      const toTime = new Date(utcTime + toOffsetSec * 1000);

      setConverted(toTime.toLocaleString());
      setFromNow(new Date().toLocaleString("en-US", { timeZone: fromZone }));
      setToNow(new Date().toLocaleString("en-US", { timeZone: toZone }));
    } catch (e) {
      setError("⚠️ Failed to convert time. Check your API key or try later.");
    }
  };

  useEffect(() => {
    convertTime();
  }, [fromZone, toZone, fromTime]);

  return (
    <div className="space-y-4 max-w-2xl">
      {error && (
        <div className="text-red-600 bg-red-100 p-2 rounded">{error}</div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="font-medium">From Timezone:</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz}>{tz}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium">To Timezone:</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="border p-2 rounded w-full"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="font-medium">Select Date & Time:</label>
        <input
          type="datetime-local"
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      {converted && (
        <div className="bg-gray-100 p-4 rounded shadow space-y-2">
          <p>
            <strong>Converted Time:</strong> {converted}
          </p>
          <p>
            <strong>{fromZone} now:</strong> {fromNow}
          </p>
          <p>
            <strong>{toZone} now:</strong> {toNow}
          </p>
        </div>
      )}
    </div>
  );
}
