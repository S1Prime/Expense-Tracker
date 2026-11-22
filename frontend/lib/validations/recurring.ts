import { z } from "zod";

export const RecurringCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  amount: z.number().positive("Amount must be positive"),
  currency: z.string().default("USD"),
  billingCycle: z.enum(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]).default("MONTHLY"),
  nextBillingDate: z.string().or(z.date()).transform((val) => new Date(val)),
  categoryId: z.string().min(1, "Category is required"),
  isActive: z.boolean().default(true),
  notes: z.string().max(500).optional().nullable(),
});

export const RecurringUpdateSchema = RecurringCreateSchema.partial();
export type RecurringCreateInput = z.infer<typeof RecurringCreateSchema>;
export type RecurringUpdateInput = z.infer<typeof RecurringUpdateSchema>;
