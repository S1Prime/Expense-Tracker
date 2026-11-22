"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { ExpenseCreateInput } from "@/lib/validations/expense";

export async function createExpenseAction(data: ExpenseCreateInput) {
  try {
    const expense = await prisma.expense.create({
      data,
    });
    revalidatePath("/expenses");
    revalidatePath("/");
    return { success: true, data: expense };
  } catch (error) {
    return { success: false, error: "Failed to create expense" };
  }
}

export async function deleteExpenseAction(id: string) {
  try {
    await prisma.expense.delete({ where: { id } });
    revalidatePath("/expenses");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete expense" };
  }
}
