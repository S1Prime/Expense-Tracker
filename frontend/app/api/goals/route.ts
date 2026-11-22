import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [],
    message: "Savings goals API endpoint ready for implementation",
  });
}

export async function POST(request: Request) {
  return NextResponse.json({
    success: true,
    message: "Create savings goal endpoint ready for implementation",
  });
}
