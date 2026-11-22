import { prisma } from "@/lib/prisma";

export class CategoryService {
  static async getAll() {
    return prisma.category.findMany({
      orderBy: { name: "asc" },
    });
  }

  static async create(data: any) {
    return prisma.category.create({ data });
  }
}
