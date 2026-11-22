import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function RecurringPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Recurring & Subscriptions</h1>
          <p className="text-sm text-slate-500">
            Track recurring utility bills, SaaS subscriptions, and scheduled payments.
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-slate-500 py-10 border border-dashed rounded-lg">
            Recurring Bills & Upcoming Due Dates placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
