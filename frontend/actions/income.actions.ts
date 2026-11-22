"use server";

import { revalidatePath } from "next/cache";

export async function createIncomeAction(data: any) {
  // Server action placeholder for creating income entry
  revalidatePath("/income");
  revalidatePath("/");
  return { success: true, message: "Income created action placeholder" };
}
