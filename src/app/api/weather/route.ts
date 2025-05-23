import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City name is required" }, { status: 400 });
  }

  try {
    // Get city coordinates
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      return NextResponse.json({ error: "City not found" }, { status: 404 });
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // Get forecast with daily & hourly
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,relativehumidity_2m,weathercode`;

    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();

    return NextResponse.json({
      location: `${name}, ${country}`,
      daily: weatherData.daily,
      hourly: weatherData.hourly,
    });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching weather data" }, { status: 500 });
  }
}
