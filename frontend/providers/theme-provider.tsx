"use client";

import * as React from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Theme context provider wrapper placeholder
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950">{children}</div>;
}
