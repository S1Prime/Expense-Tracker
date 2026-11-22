export interface Category {
  id: string;
  name: string;
  icon?: string | null;
  color?: string | null;
  budgetLimit?: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

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

export interface Budget {
  id: string;
  month: number;
  year: number;
  amount: number;
  categoryId?: string | null;
  category?: Category | null;
  userId?: string | null;
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
