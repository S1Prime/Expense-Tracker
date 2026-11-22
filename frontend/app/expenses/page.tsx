import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ExpenseFilters } from "@/components/expenses/expense-filters";
import { ExpenseList } from "@/components/expenses/expense-list";

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Expenses
          </h1>
          <p className="text-sm text-slate-500">
            View, filter, and manage all recorded transactions.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ExpenseList expenses={[]} />
        </CardContent>
      </Card>
    </div>
  );
}
