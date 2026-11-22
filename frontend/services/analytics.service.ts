import { prisma } from "@/lib/prisma";

export class AnalyticsService {
  static async getSummary() {
    const total = await prisma.expense.aggregate({
      _sum: { amount: true },
      _count: { id: true },
    });

    return {
      totalSpent: total._sum.amount || 0,
      count: total._count.id || 0,
    };
  }
}
