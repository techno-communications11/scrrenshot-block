import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  if (payload) {
    console.log("[monitor] capture attempt", payload);
  } else {
    console.warn("[monitor] capture attempt received empty payload");
  }

  return NextResponse.json({ status: "logged" });
}
