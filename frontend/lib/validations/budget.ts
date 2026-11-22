import { z } from "zod";

export const BudgetCreateSchema = z.object({
  month: z.number().int().min(1).max(12),
  year: z.number().int().min(2000).max(2100),
  amount: z.number().positive("Budget amount must be positive"),
  categoryId: z.string().optional().nullable(),
});

export const BudgetUpdateSchema = BudgetCreateSchema.partial();
export type BudgetCreateInput = z.infer<typeof BudgetCreateSchema>;
export type BudgetUpdateInput = z.infer<typeof BudgetUpdateSchema>;
