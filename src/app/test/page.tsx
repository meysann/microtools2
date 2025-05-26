"use client";

import AgeCalculator from "@/components/tools/AgeCalculator";

export default function TestPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-right">تست ابزار سن</h1>
      <AgeCalculator />
    </div>
  );
}
