"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { CategoryCreateInput } from "@/lib/validations/category";

export async function createCategoryAction(data: CategoryCreateInput) {
  try {
    const category = await prisma.category.create({ data });
    revalidatePath("/categories");
    return { success: true, data: category };
  } catch (error) {
    return { success: false, error: "Failed to create category" };
  }
}
