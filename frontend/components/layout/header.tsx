"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onAddExpense?: () => void;
}

export function Header({ onAddExpense }: HeaderProps) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search expenses..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell className="w-5 h-5" />
        </button>
        {onAddExpense && (
          <Button onClick={onAddExpense} size="sm">
            + Add Expense
          </Button>
        )}
      </div>
    </header>
  );
}
