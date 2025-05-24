"use client";
import { useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [results, setResults] = useState<any>(null);

  const calculateAge = () => {
    if (!birthDate) return setResults(null);

    const birth = new Date(birthDate);
    const today = new Date();

    // Years / months / days calculation
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    // Total days
    const ageInDays = Math.floor(
      (today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
    );

    // Next birthday
    const nextBirthday = new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const msUntilBirthday = nextBirthday.getTime() - today.getTime();
    const daysUntilBirthday = Math.ceil(
      msUntilBirthday / (1000 * 60 * 60 * 24)
    );

    // Day of week born
    const dayOfWeekBorn = birth.toLocaleDateString("en-US", {
      weekday: "long",
    });

    setResults({
      years,
      months,
      days,
      ageInDays,
      nextBirthday: nextBirthday.toDateString(),
      daysUntilBirthday,
      dayOfWeekBorn,
    });
  };

  return (
    <div className="space-y-4 max-w-md">
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={calculateAge}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Age
      </button>

      {results && (
        <div className="bg-gray-50 p-4 rounded shadow space-y-2">
          <p>
            <strong>Exact Age:</strong> {results.years} years, {results.months}{" "}
            months, {results.days} days
          </p>
          <p>
            <strong>Total Days Alive:</strong> {results.ageInDays} days
          </p>
          <p>
            <strong>Born On:</strong> {results.dayOfWeekBorn}
          </p>
          <p>
            <strong>Next Birthday:</strong> {results.nextBirthday}
          </p>
          <p>
            <strong>Days Until Birthday:</strong> {results.daysUntilBirthday}{" "}
            days
          </p>
        </div>
      )}
    </div>
  );
}
