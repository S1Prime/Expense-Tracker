import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Suspense } from "react";

async function ExpenseDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit / View Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
          Expense details for ID: {id}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExpenseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Expense Details</h1>
        <p className="text-sm text-slate-500">Transaction details and receipt view.</p>
      </div>
      <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading expense...</div>}>
        <ExpenseDetailContent params={params} />
      </Suspense>
    </div>
  );
}
