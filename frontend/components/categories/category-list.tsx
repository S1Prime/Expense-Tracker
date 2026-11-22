"use client";

import type { Category } from "@/types";
import { Badge } from "@/components/ui/badge";

export function CategoryList({ categories }: { categories: Category[] }) {
  if (!categories?.length) {
    return <div className="text-sm text-slate-500 py-6 text-center">No categories found.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {categories.map((c) => (
        <div key={c.id} className="p-3 border rounded-lg flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: c.color || "#10B981" }}
          />
          <span className="text-sm font-medium">{c.name}</span>
        </div>
      ))}
    </div>
  );
}
