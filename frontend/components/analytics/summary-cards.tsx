import { DollarSign, TrendingDown, Calendar, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

interface SummaryCardsProps {
  totalSpent?: number;
  monthlySpent?: number;
  expenseCount?: number;
  currency?: string;
}

export function SummaryCards({
  totalSpent = 0,
  monthlySpent = 0,
  expenseCount = 0,
  currency = "USD",
}: SummaryCardsProps) {
  const cards = [
    {
      title: "Total Spent",
      value: formatCurrency(totalSpent, currency),
      icon: DollarSign,
      color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950",
    },
    {
      title: "This Month",
      value: formatCurrency(monthlySpent, currency),
      icon: Calendar,
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950",
    },
    {
      title: "Total Transactions",
      value: expenseCount.toString(),
      icon: CreditCard,
      color: "text-amber-600 bg-amber-50 dark:bg-amber-950",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm font-medium text-slate-500">{card.title}</p>
                <p className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">
                  {card.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${card.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
