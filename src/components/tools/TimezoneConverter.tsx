"use client";

import { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/teal.css";

const API_KEY = "TM1OBU4XA1WU";
const BASE_URL = "https://api.timezonedb.com/v2.1";

const TIMEZONES = [
  { id: "Asia/Tehran", fa: "تهران (ایران)" },
  { id: "Asia/Dubai", fa: "دبی (امارات)" },
  { id: "Europe/London", fa: "لندن (انگلیس)" },
  { id: "Europe/Berlin", fa: "برلین (آلمان)" },
  { id: "Asia/Tokyo", fa: "توکیو (ژاپن)" },
  { id: "America/New_York", fa: "نیویورک (آمریکا)" },
  { id: "America/Los_Angeles", fa: "لس‌آنجلس (آمریکا)" },
  { id: "Asia/Kolkata", fa: "کلکته (هند)" },
  { id: "UTC", fa: "زمان جهانی (UTC)" },
];

export default function TimezoneConverter() {
  const [fromZone, setFromZone] = useState("Asia/Tehran");
  const [toZone, setToZone] = useState("Europe/London");
  const [selectedDate, setSelectedDate] = useState(new Date());
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
        throw new Error("API response error");
      }

      const fromOffset = fromData.gmtOffset;
      const toOffset = toData.gmtOffset;

      const localDate = new Date(selectedDate.toDate());
      const utc = localDate.getTime() - fromOffset * 1000;
      const toDate = new Date(utc + toOffset * 1000);

      const formatter = new Intl.DateTimeFormat("fa-IR", {
        dateStyle: "full",
        timeStyle: "short",
      });

      setConverted(formatter.format(toDate));

      setFromNow(
        new Intl.DateTimeFormat("fa-IR", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: fromZone,
        }).format(new Date())
      );

      setToNow(
        new Intl.DateTimeFormat("fa-IR", {
          dateStyle: "short",
          timeStyle: "short",
          timeZone: toZone,
        }).format(new Date())
      );
    } catch (err) {
      setError(
        "❌ تبدیل زمان انجام نشد. لطفاً کلید API یا اتصال اینترنت را بررسی کنید."
      );
    }
  };

  useEffect(() => {
    convertTime();
  }, [fromZone, toZone, selectedDate]);

  return (
    <div className="space-y-6 max-w-xl mx-auto text-right">
      {error && (
        <div className="bg-red-100 border border-red-500 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-1">منطقه زمانی مبدأ:</label>
          <select
            value={fromZone}
            onChange={(e) => setFromZone(e.target.value)}
            className="w-full border rounded p-2 dark:bg-gray-800 dark:text-white"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.id} value={tz.id}>
                {tz.fa}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">منطقه زمانی مقصد:</label>
          <select
            value={toZone}
            onChange={(e) => setToZone(e.target.value)}
            className="w-full border rounded p-2 dark:bg-gray-800 dark:text-white"
          >
            {TIMEZONES.map((tz) => (
              <option key={tz.id} value={tz.id}>
                {tz.fa}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-semibold mb-1">تاریخ و زمان مبدأ:</label>
        <DatePicker
          value={selectedDate}
          onChange={setSelectedDate}
          format="YYYY/MM/DD HH:mm"
          locale="fa"
          digits="fa"
          calendarPosition="bottom-right"
          plugins={[<TimePicker key="t" position="bottom" />]}
          className="teal w-full"
        />
      </div>

      {converted && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow space-y-3 text-sm sm:text-base mt-4">
          <p>
            ⏱️ <strong>زمان تبدیل‌شده:</strong>{" "}
            <span className="font-bold text-blue-700 dark:text-blue-300">
              {converted}
            </span>
          </p>
          <p>
            📍{" "}
            <strong>
              زمان فعلی در {TIMEZONES.find((t) => t.id === fromZone)?.fa}:
            </strong>{" "}
            {fromNow}
          </p>
          <p>
            🌍{" "}
            <strong>
              زمان فعلی در {TIMEZONES.find((t) => t.id === toZone)?.fa}:
            </strong>{" "}
            {toNow}
          </p>
        </div>
      )}
    </div>
  );
}
