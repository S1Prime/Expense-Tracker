export interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate?: Date | string | null;
  color?: string | null;
  notes?: string | null;
  isCompleted: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
