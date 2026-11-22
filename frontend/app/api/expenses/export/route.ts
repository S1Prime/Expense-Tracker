import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/expenses/export
 * Exports transactions as CSV / JSON
 */
export async function GET() {
  try {
    const expenses = await prisma.expense.findMany({
      include: { category: true },
      orderBy: { date: "desc" },
    });

    return NextResponse.json({ success: true, data: expenses, count: expenses.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Export failed" }, { status: 500 });
  }
}
