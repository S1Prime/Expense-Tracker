import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const INITIAL_CATEGORIES = [
  { name: "Food & Dining", icon: "Utensils", color: "#EF4444", budgetLimit: 500 },
  { name: "Transportation", icon: "Car", color: "#F59E0B", budgetLimit: 200 },
  { name: "Shopping", icon: "ShoppingBag", color: "#3B82F6", budgetLimit: 300 },
  { name: "Housing & Bills", icon: "Home", color: "#10B981", budgetLimit: 1200 },
  { name: "Entertainment", icon: "Film", color: "#8B5CF6", budgetLimit: 150 },
  { name: "Health & Medical", icon: "HeartPulse", color: "#EC4899", budgetLimit: 100 },
  { name: "Investments", icon: "TrendingUp", color: "#14B8A6", budgetLimit: 500 },
  { name: "Other", icon: "CircleDot", color: "#6B7280", budgetLimit: 100 },
];

async function main() {
  console.log("Seeding default categories...");
  for (const cat of INITIAL_CATEGORIES) {
    await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: cat,
    });
  }
  console.log("Seed completed successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
