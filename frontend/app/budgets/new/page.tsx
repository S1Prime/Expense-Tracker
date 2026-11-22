import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NewBudgetPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Create Monthly Budget</h1>
        <p className="text-sm text-slate-500">Set spending thresholds for categories or total monthly cap.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Budget Target</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Budget Configuration Form placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
