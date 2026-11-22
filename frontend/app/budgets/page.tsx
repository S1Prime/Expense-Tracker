import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Monthly Budgets
        </h1>
        <p className="text-sm text-slate-500">
          Set spending targets per category to keep your expenses under control.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Category Budgets</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-slate-500">
            Define limits for Food, Transportation, Housing, and other categories.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
