import { NextResponse } from "next/server";

/**
 * GET /api/income
 * List income records
 */
export async function GET() {
  return NextResponse.json({
    success: true,
    data: [],
    message: "Income endpoint placeholder ready for implementation",
  });
}

/**
 * POST /api/income
 * Create new income record
 */
export async function POST(request: Request) {
  return NextResponse.json({
    success: true,
    message: "Create income endpoint ready for implementation",
  });
}
