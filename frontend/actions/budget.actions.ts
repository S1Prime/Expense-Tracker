"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { BudgetCreateInput } from "@/lib/validations/budget";

export async function setBudgetAction(data: BudgetCreateInput) {
  try {
    const budget = await prisma.budget.create({ data });
    revalidatePath("/budgets");
    return { success: true, data: budget };
  } catch (error) {
    return { success: false, error: "Failed to set budget" };
  }
}
