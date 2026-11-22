import { useState } from "react";
import type { Income } from "@/types";

export function useIncome() {
  const [incomeList, setIncomeList] = useState<Income[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return { incomeList, isLoading, setIncomeList, setIsLoading };
}
