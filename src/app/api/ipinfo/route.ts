import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get("ip") || "";

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();

    if (data.error) {
      return NextResponse.json({ error: data.reason }, { status: 400 });
    }

    return NextResponse.json({ ipinfo: data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch IP info" }, { status: 500 });
  }
}
