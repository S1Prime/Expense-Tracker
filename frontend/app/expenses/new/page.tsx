import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function NewExpensePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Add New Expense</h1>
        <p className="text-sm text-slate-500">Record a new expense transaction.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Expense Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Expense Form Component placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
