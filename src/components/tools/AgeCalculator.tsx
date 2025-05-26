"use client";

import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import moment from "moment-jalaali";

moment.loadPersian({ usePersianDigits: true });

type AgeData = {
  years: number;
  months: number;
  days: number;
  ageInDays: number;
  dayOfWeekBorn: string;
  daysUntilBirthday: number;
  nextBirthday: string;
};

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<any>(null);
  const [result, setResult] = useState<AgeData | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const gregorian = birthDate.toDate();
    const birth = moment(gregorian);
    const today = moment();

    let years = today.diff(birth, "years");
    birth.add(years, "years");

    let months = today.diff(birth, "months");
    birth.add(months, "months");

    let days = today.diff(birth, "days");

    const ageInDays = today.diff(moment(gregorian), "days");

    const nextBirthday = moment(gregorian).year(today.year());
    if (nextBirthday.isBefore(today)) {
      nextBirthday.add(1, "year");
    }

    const daysUntilBirthday = nextBirthday.diff(today, "days");
    const dayOfWeekBorn = moment(gregorian).format("dddd");

    setResult({
      years,
      months,
      days,
      ageInDays,
      nextBirthday: nextBirthday.format("jYYYY/jMM/jDD"),
      daysUntilBirthday,
      dayOfWeekBorn,
    });
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto text-right">
      <div className="space-y-2">
        <label className="block font-semibold">تاریخ تولد (شمسی):</label>
        <DatePicker
          value={birthDate}
          onChange={setBirthDate}
          calendar={persian}
          locale={persian_fa}
          format="YYYY/MM/DD"
          calendarPosition="bottom-right"
          inputClass="w-full p-2 border rounded text-right"
          containerClassName="w-full"
        />
      </div>

      <button
        onClick={calculateAge}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        محاسبه سن
      </button>

      {result && (
        <div className="bg-gray-100 dark:bg-gray-800 text-sm sm:text-base p-4 rounded shadow space-y-2 mt-4">
          <p>
            🎂 <strong>سن دقیق:</strong> {result.years} سال، {result.months}{" "}
            ماه، {result.days} روز
          </p>
          <p>
            📅 <strong>مجموع روزهای زندگی:</strong>{" "}
            {result.ageInDays.toLocaleString()} روز
          </p>
          <p>
            📆 <strong>روز هفته تولد:</strong> {result.dayOfWeekBorn}
          </p>
          <p>
            🎉 <strong>تولد بعدی:</strong> {result.nextBirthday}
          </p>
          <p>
            ⏳ <strong>روز باقی‌مانده تا تولد:</strong>{" "}
            {result.daysUntilBirthday} روز
          </p>
        </div>
      )}
    </div>
  );
}
