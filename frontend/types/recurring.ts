export type BillingCycle = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";

export interface RecurringExpense {
  id: string;
  title: string;
  amount: number;
  currency: string;
  billingCycle: BillingCycle;
  nextBillingDate: Date | string;
  categoryId: string;
  isActive: boolean;
  notes?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}
