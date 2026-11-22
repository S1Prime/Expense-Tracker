"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PAYMENT_METHODS } from "@/lib/constants";
import type { ExpenseCreateInput } from "@/lib/validations/expense";

interface ExpenseFormProps {
  onSubmit: (data: ExpenseCreateInput) => void;
  onCancel?: () => void;
  isLoading?: boolean;
}

export function ExpenseForm({ onSubmit, onCancel, isLoading }: ExpenseFormProps) {
  // Structure placeholder for form fields
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Form submit logic handler placeholder
      }}
      className="space-y-4"
    >
      <Input label="Title" placeholder="e.g., Grocery Shopping" required />
      <Input label="Amount" type="number" step="0.01" placeholder="0.00" required />
      
      <div className="space-y-1">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Payment Method
        </label>
        <select className="w-full h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 text-sm">
          {PAYMENT_METHODS.map((pm) => (
            <option key={pm.value} value={pm.value}>
              {pm.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Saving..." : "Save Expense"}
        </Button>
      </div>
    </form>
  );
}
