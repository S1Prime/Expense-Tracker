"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CategoryForm() {
  return (
    <form className="space-y-4">
      <Input label="Category Name" placeholder="e.g. Groceries" required />
      <Input label="Color Code" placeholder="#10B981" />
      <Button type="submit">Save Category</Button>
    </form>
  );
}
