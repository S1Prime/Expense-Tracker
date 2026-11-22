import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/analytics
 * Returns summary stats: total spent, monthly breakdown, count
 */
export async function GET() {
  try {
    const totalResult = await prisma.expense.aggregate({
      _sum: { amount: true },
      _count: { id: true },
    });

    return NextResponse.json({
      success: true,
      data: {
        totalSpent: totalResult._sum.amount || 0,
        expenseCount: totalResult._count.id || 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
