import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
          <p className="text-sm text-slate-500">
            Generate, filter, and export tax, annual, and monthly statements.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Export Statements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Report Generators (CSV, PDF, Excel) placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
