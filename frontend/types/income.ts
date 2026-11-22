export type IncomeSource =
  | "SALARY"
  | "FREELANCE"
  | "BUSINESS"
  | "INVESTMENT"
  | "GIFT"
  | "RENTAL"
  | "OTHER";

export interface Income {
  id: string;
  title: string;
  amount: number;
  currency: string;
  date: Date | string;
  source: IncomeSource;
  notes?: string | null;
  userId?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface IncomeFilterParams {
  search?: string;
  source?: IncomeSource;
  startDate?: string;
  endDate?: string;
  minAmount?: number;
  maxAmount?: number;
}
