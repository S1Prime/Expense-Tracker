import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ExpenseCreateSchema } from "@/lib/validations/expense";

/**
 * GET /api/expenses
 * Lists expenses with optional query filters
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const categoryId = searchParams.get("categoryId");

    const where: any = {};
    if (search) {
      where.title = { contains: search };
    }
    if (categoryId) {
      where.categoryId = categoryId;
    }

    const expenses = await prisma.expense.findMany({
      where,
      include: { category: true },
      orderBy: { date: "desc" },
    });

    return NextResponse.json({ success: true, data: expenses });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/expenses
 * Creates a new expense
 */
export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = ExpenseCreateSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const newExpense = await prisma.expense.create({
      data: parsed.data,
      include: { category: true },
    });

    return NextResponse.json({ success: true, data: newExpense }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to create expense" },
      { status: 500 }
    );
  }
}
