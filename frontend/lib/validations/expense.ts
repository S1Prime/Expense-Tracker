import { z } from "zod";

export const ExpenseCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  amount: z.number().positive("Amount must be greater than 0"),
  currency: z.string().default("USD"),
  date: z.string().or(z.date()).transform((val) => new Date(val)),
  categoryId: z.string().min(1, "Category is required"),
  paymentMethod: z.enum([
    "CASH",
    "CREDIT_CARD",
    "DEBIT_CARD",
    "UPI",
    "BANK_TRANSFER",
    "OTHER",
  ]).default("CASH"),
  notes: z.string().max(500).optional().nullable(),
  isRecurring: z.boolean().default(false),
});

export const ExpenseUpdateSchema = ExpenseCreateSchema.partial();

export const ExpenseFilterSchema = z.object({
  search: z.string().optional(),
  categoryId: z.string().optional(),
  paymentMethod: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  minAmount: z.number().optional(),
  maxAmount: z.number().optional(),
  sortBy: z.enum(["date", "amount", "title"]).default("date"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export type ExpenseCreateInput = z.infer<typeof ExpenseCreateSchema>;
export type ExpenseUpdateInput = z.infer<typeof ExpenseUpdateSchema>;
export type ExpenseFilterQuery = z.infer<typeof ExpenseFilterSchema>;
