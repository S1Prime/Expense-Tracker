export interface Category {
  id: string;
  name: string;
  icon?: string | null;
  color?: string | null;
  budgetLimit?: number | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface CategorySummary extends Category {
  totalSpent: number;
  transactionCount: number;
  percentageOfBudget?: number;
}
