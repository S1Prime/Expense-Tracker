import type { Category } from "./category";

export type PaymentMethod =
  | "CASH"
  | "CREDIT_CARD"
  | "DEBIT_CARD"
  | "UPI"
  | "BANK_TRANSFER"
  | "OTHER";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  date: Date | string;
  notes?: string | null;
  paymentMethod: PaymentMethod;
  isRecurring: boolean;
  categoryId: string;
  category?: Category;
  userId?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ExpenseSummary {
  totalSpent: number;
  monthlySpent: number;
  dailyAverage: number;
  expenseCount: number;
  topCategory?: {
    name: string;
    amount: number;
    color?: string | null;
  };
}

export interface ExpenseFilterParams {
  search?: string;
  categoryId?: string;
  paymentMethod?: string;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
  sortBy?: "date" | "amount" | "title";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
}
