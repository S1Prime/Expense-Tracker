import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
    danger: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
    outline: "border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
