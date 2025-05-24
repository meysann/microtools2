import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  try {
    const res = await fetch("https://api.apyhub.com/ai/summarize-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apy-token": process.env.APYHUB_API_KEY || "",
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();

    return NextResponse.json({ summary: data.data.summary });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to summarize. Try again later." },
      { status: 500 }
    );
  }
}
