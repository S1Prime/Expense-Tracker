"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function BudgetForm() {
  return (
    <form className="space-y-4">
      <Input label="Budget Amount" type="number" placeholder="500.00" required />
      <Button type="submit">Save Budget</Button>
    </form>
  );
}
