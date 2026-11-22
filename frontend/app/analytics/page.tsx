import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Analytics & Insights
        </h1>
        <p className="text-sm text-slate-500">
          Analyze spending habits, category breakdowns, and monthly trends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
              Chart breakdown placeholder
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Spending Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
              Monthly trend placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
