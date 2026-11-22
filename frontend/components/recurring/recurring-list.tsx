"use client";

import type { RecurringExpense } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function RecurringList({ items }: { items: RecurringExpense[] }) {
  if (!items?.length) {
    return <div className="text-sm text-slate-500 py-6 text-center">No subscriptions tracked.</div>;
  }

  return (
    <div className="space-y-3">
      {items.map((sub) => (
        <div key={sub.id} className="flex justify-between items-center p-4 border rounded-lg">
          <div>
            <p className="font-medium">{sub.title}</p>
            <p className="text-xs text-slate-500">{sub.billingCycle}</p>
          </div>
          <span className="font-semibold">{formatCurrency(sub.amount, sub.currency)}</span>
        </div>
      ))}
    </div>
  );
}
