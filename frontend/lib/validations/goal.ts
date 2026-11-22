import { z } from "zod";

export const GoalCreateSchema = z.object({
  name: z.string().min(1, "Goal name is required").max(100),
  targetAmount: z.number().positive("Target amount must be positive"),
  currentAmount: z.number().min(0).default(0),
  targetDate: z.string().or(z.date()).optional().nullable(),
  color: z.string().optional().nullable(),
  notes: z.string().max(500).optional().nullable(),
});

export const GoalUpdateSchema = GoalCreateSchema.partial();
export type GoalCreateInput = z.infer<typeof GoalCreateSchema>;
export type GoalUpdateInput = z.infer<typeof GoalUpdateSchema>;
