import { useState, useEffect } from "react";
import type { Expense, ExpenseFilterParams, ExpenseSummary } from "@/types";

/**
 * Hook for managing expense state, filters, and operations
 */
export function useExpenses(initialFilters?: ExpenseFilterParams) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [summary, setSummary] = useState<ExpenseSummary | null>(null);
  const [filters, setFilters] = useState<ExpenseFilterParams>(initialFilters || {});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return {
    expenses,
    summary,
    filters,
    setFilters,
    isLoading,
    error,
    setExpenses,
    setIsLoading,
    setError,
  };
}
