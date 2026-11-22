import { NextResponse } from "next/server";

/**
 * POST /api/upload
 * Handles receipt and invoice image/PDF file uploads
 */
export async function POST(request: Request) {
  return NextResponse.json({
    success: true,
    message: "Receipt upload endpoint ready for storage implementation",
  });
}
