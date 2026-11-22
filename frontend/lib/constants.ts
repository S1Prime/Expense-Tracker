export const PAYMENT_METHODS = [
  { value: "CASH", label: "Cash" },
  { value: "CREDIT_CARD", label: "Credit Card" },
  { value: "DEBIT_CARD", label: "Debit Card" },
  { value: "UPI", label: "UPI / QR" },
  { value: "BANK_TRANSFER", label: "Bank Transfer" },
  { value: "OTHER", label: "Other" },
] as const;

export const DEFAULT_CATEGORIES = [
  { name: "Food & Dining", icon: "Utensils", color: "#EF4444" },
  { name: "Transportation", icon: "Car", color: "#F59E0B" },
  { name: "Shopping", icon: "ShoppingBag", color: "#3B82F6" },
  { name: "Housing & Bills", icon: "Home", color: "#10B981" },
  { name: "Entertainment", icon: "Film", color: "#8B5CF6" },
  { name: "Health & Medical", icon: "HeartPulse", color: "#EC4899" },
  { name: "Personal Care", icon: "Sparkles", color: "#06B6D4" },
  { name: "Investments", icon: "TrendingUp", color: "#14B8A6" },
  { name: "Other", icon: "CircleDot", color: "#6B7280" },
] as const;

export const SUPPORTED_CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "CAD", symbol: "CA$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
] as const;
