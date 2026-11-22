import { z } from "zod";

export const IncomeCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  amount: z.number().positive("Amount must be greater than 0"),
  currency: z.string().default("USD"),
  date: z.string().or(z.date()).transform((val) => new Date(val)),
  source: z.enum([
    "SALARY",
    "FREELANCE",
    "BUSINESS",
    "INVESTMENT",
    "GIFT",
    "RENTAL",
    "OTHER",
  ]).default("SALARY"),
  notes: z.string().max(500).optional().nullable(),
});

export const IncomeUpdateSchema = IncomeCreateSchema.partial();
export type IncomeCreateInput = z.infer<typeof IncomeCreateSchema>;
export type IncomeUpdateInput = z.infer<typeof IncomeUpdateSchema>;
