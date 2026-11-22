"use client";

import { Search, Filter } from "lucide-react";
import type { ExpenseFilterParams } from "@/types";

interface ExpenseFiltersProps {
  filters: ExpenseFilterParams;
  onChange: (filters: ExpenseFilterParams) => void;
}

export function ExpenseFilters({ filters, onChange }: ExpenseFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-slate-900">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          placeholder="Filter by keyword..."
          value={filters.search || ""}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full pl-9 pr-3 py-1.5 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-transparent focus:outline-none focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <Filter className="w-4 h-4 text-slate-400" />
        <select
          value={filters.sortBy || "date"}
          onChange={(e) =>
            onChange({ ...filters, sortBy: e.target.value as "date" | "amount" | "title" })
          }
          className="text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-2 py-1.5"
        >
          <option value="date">Sort by Date</option>
          <option value="amount">Sort by Amount</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
    </div>
  );
}
