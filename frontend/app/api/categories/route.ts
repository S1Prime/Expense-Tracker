import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/categories
 * Returns all configured expense categories
 */
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { expenses: true },
        },
      },
    });

    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/categories
 * Creates a custom category
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, icon, color, budgetLimit } = body;

    if (!name) {
      return NextResponse.json(
        { success: false, error: "Category name is required" },
        { status: 400 }
      );
    }

    const category = await prisma.category.create({
      data: { name, icon, color, budgetLimit: budgetLimit ? Number(budgetLimit) : null },
    });

    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create category" },
      { status: 500 }
    );
  }
}
