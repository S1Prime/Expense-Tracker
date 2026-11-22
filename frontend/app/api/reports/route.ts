import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    summary: {
      generatedAt: new Date().toISOString(),
      reportType: "MONTHLY_CASHFLOW",
    },
    message: "Financial reports endpoint ready for implementation",
  });
}
