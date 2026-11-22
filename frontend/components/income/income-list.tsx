"use client";

import type { Income } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";

export function IncomeList({ items }: { items: Income[] }) {
  if (!items?.length) {
    return <div className="text-sm text-slate-500 py-6 text-center">No income records yet.</div>;
  }

  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-800">
      {items.map((item) => (
        <div key={item.id} className="flex justify-between py-3">
          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-slate-500">{formatDate(item.date)}</p>
          </div>
          <span className="text-emerald-600 font-semibold">
            +{formatCurrency(item.amount, item.currency)}
          </span>
        </div>
      ))}
    </div>
  );
}
