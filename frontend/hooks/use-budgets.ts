import { useState } from "react";
import type { Budget } from "@/types";

export function useBudgets() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return { budgets, isLoading, setBudgets, setIsLoading };
}
