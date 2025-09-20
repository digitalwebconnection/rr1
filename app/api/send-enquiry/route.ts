import { NextResponse } from "next/server";

// Make sure this isn't statically optimized or put on edge
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// CORS (only matters if frontend and API are on different origins)
const ALLOWED_ORIGIN = process.env.CORS_ORIGIN || ""; // e.g. https://your-frontend.com
const corsHeaders = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function GET() {
  return NextResponse.json({ status: "alive" }, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    // Ensure JSON parse doesn’t crash the route
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400, headers: corsHeaders });
    }

    const { name, email, phone, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400, headers: corsHeaders });
    }

    // 🔧 TEMP: prove the route works
    console.log("New enquiry:", { name, email, phone, message });

    // TODO: plug in SendGrid/Resend/Mailgun here
    // return NextResponse.json({ ok: true }, { headers: corsHeaders });

    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
