import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const ip = req.nextUrl.searchParams.get("ip") || "";

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: {
        "User-Agent": "Microtools IP Lookup",
      },
    });

    const data = await res.json();

    if (!data || data.error) {
      return new Response(JSON.stringify({ error: "آی‌پی یافت نشد." }), {
        status: 404,
      });
    }

    return Response.json({ ipinfo: data });
  } catch {
    return new Response(JSON.stringify({ error: "دریافت اطلاعات آی‌پی با خطا مواجه شد." }), {
      status: 500,
    });
  }
}
