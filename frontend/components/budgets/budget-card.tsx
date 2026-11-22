import { Card, CardContent } from "@/components/ui/card";
import type { Budget } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function BudgetCard({ budget, spent = 0 }: { budget: Budget; spent?: number }) {
  const percent = Math.min(Math.round((spent / budget.amount) * 100), 100);

  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">
            {budget.category?.name || "Total Monthly Cap"}
          </span>
          <span className="text-xs text-slate-500">{percent}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-slate-800">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>Spent: {formatCurrency(spent)}</span>
          <span>Budget: {formatCurrency(budget.amount)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
