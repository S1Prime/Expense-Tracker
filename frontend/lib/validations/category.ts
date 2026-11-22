import { z } from "zod";

export const CategoryCreateSchema = z.object({
  name: z.string().min(1, "Name is required").max(50),
  icon: z.string().optional().nullable(),
  color: z.string().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "Invalid hex color").optional().nullable(),
  budgetLimit: z.number().positive("Limit must be positive").optional().nullable(),
});

export const CategoryUpdateSchema = CategoryCreateSchema.partial();
export type CategoryCreateInput = z.infer<typeof CategoryCreateSchema>;
export type CategoryUpdateInput = z.infer<typeof CategoryUpdateSchema>;
