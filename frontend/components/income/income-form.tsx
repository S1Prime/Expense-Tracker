"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function IncomeForm() {
  return (
    <form className="space-y-4">
      <Input label="Income Source" placeholder="e.g., Monthly Salary" required />
      <Input label="Amount" type="number" step="0.01" placeholder="0.00" required />
      <Button type="submit">Add Income</Button>
    </form>
  );
}
