import { prisma } from "@/lib/prisma";
import type { ExpenseFilterParams } from "@/types";

export class ExpenseService {
  static async getAll(params?: ExpenseFilterParams) {
    return prisma.expense.findMany({
      include: { category: true },
      orderBy: { date: "desc" },
    });
  }

  static async getById(id: string) {
    return prisma.expense.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  static async create(data: any) {
    return prisma.expense.create({ data });
  }

  static async delete(id: string) {
    return prisma.expense.delete({ where: { id } });
  }
}
