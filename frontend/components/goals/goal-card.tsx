import { Card, CardContent } from "@/components/ui/card";
import type { SavingsGoal } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function GoalCard({ goal }: { goal: SavingsGoal }) {
  const progress = Math.min(Math.round((goal.currentAmount / goal.targetAmount) * 100), 100);

  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold">{goal.name}</span>
          <span className="text-xs text-slate-500">{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 dark:bg-slate-800">
          <div
            className="bg-emerald-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>{formatCurrency(goal.currentAmount)}</span>
          <span>Target: {formatCurrency(goal.targetAmount)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
