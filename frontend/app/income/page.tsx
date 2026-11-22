import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function IncomePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Income & Earnings</h1>
          <p className="text-sm text-slate-500">
            Log salary, freelance pay, dividends, and cashflow.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Income Stream</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Income List & Entry Form placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
