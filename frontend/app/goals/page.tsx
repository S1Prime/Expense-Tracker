import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function GoalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Savings Goals</h1>
          <p className="text-sm text-slate-500">
            Plan, fund, and track financial milestones and target funds.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Savings Goals Grid & Progress Tracker placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
