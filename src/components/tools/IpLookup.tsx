"use client";
import { useState } from "react";

export default function IpLookup() {
  const [ip, setIp] = useState("");
  const [info, setInfo] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchIPInfo = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/ipinfo?ip=${ip}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setInfo(data.ipinfo);
    } catch (err: any) {
      setError(err.message);
      setInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-md">
      <div className="flex gap-2">
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="Enter IP address"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={fetchIPInfo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lookup
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {info && (
        <div className="bg-gray-50 p-4 rounded shadow space-y-2">
          <p>
            <strong>IP:</strong> {info.ip}
          </p>
          <p>
            <strong>City:</strong> {info.city}
          </p>
          <p>
            <strong>Region:</strong> {info.region}
          </p>
          <p>
            <strong>Country:</strong> {info.country_name}
          </p>
          <p>
            <strong>Org:</strong> {info.org}
          </p>
          <p>
            <strong>Timezone:</strong> {info.timezone}
          </p>
          <p>
            <strong>Coordinates:</strong> {info.latitude}, {info.longitude}
          </p>
        </div>
      )}
    </div>
  );
}
