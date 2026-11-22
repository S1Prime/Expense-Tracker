import { prisma } from "@/lib/prisma";

export class BudgetService {
  static async getActiveBudgets(month: number, year: number) {
    return prisma.budget.findMany({
      where: { month, year },
      include: { category: true },
    });
  }
}
