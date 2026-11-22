import type { Category } from "./category";

export interface Budget {
  id: string;
  month: number; // 1-12
  year: number;  // e.g. 2026
  amount: number;
  categoryId?: string | null;
  category?: Category | null;
  userId?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface BudgetStatus {
  budget: Budget;
  spent: number;
  remaining: number;
  percentageUsed: number;
  isOverBudget: boolean;
}
