"use client";

import type { Expense } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ExpenseListProps {
  expenses: Expense[];
  isLoading?: boolean;
  onDelete?: (id: string) => void;
}

export function ExpenseList({ expenses, isLoading, onDelete }: ExpenseListProps) {
  if (isLoading) {
    return <div className="p-8 text-center text-slate-500">Loading expenses...</div>;
  }

  if (expenses.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500">
        No expenses found. Add your first expense to get started.
      </div>
    );
  }

  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-800">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex items-center justify-between p-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <div className="space-y-1">
            <p className="font-medium text-slate-900 dark:text-white">{expense.title}</p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>{formatDate(expense.date)}</span>
              <span>•</span>
              <Badge variant="default">{expense.paymentMethod}</Badge>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-slate-900 dark:text-white">
              {formatCurrency(expense.amount, expense.currency)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
