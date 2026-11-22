import { SummaryCards } from "@/components/analytics/summary-cards";
import { ExpenseList } from "@/components/expenses/expense-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500">
          Monitor your daily expenses, monthly budget, and financial health.
        </p>
      </div>

      <SummaryCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Recent Expenses</CardTitle>
            <Link
              href="/expenses"
              className="text-xs font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
            >
              View all <ArrowUpRight className="w-3 h-3" />
            </Link>
          </CardHeader>
          <CardContent>
            <ExpenseList expenses={[]} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Budget Health</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500">
              Set monthly category budgets in the Budgets section to track your spending limits.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
