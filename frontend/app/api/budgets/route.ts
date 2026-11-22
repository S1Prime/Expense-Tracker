import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const budgets = await prisma.budget.findMany({
      include: { category: true },
      orderBy: [{ year: "desc" }, { month: "desc" }],
    });
    return NextResponse.json({ success: true, data: budgets });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch budgets" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const budget = await prisma.budget.create({
      data: body,
      include: { category: true },
    });
    return NextResponse.json({ success: true, data: budget }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create budget" }, { status: 500 });
  }
}
