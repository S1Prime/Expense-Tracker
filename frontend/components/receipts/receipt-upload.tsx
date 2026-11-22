"use client";

import { UploadCloud } from "lucide-react";

export function ReceiptUpload() {
  return (
    <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 text-center cursor-pointer hover:border-emerald-500 transition-colors">
      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
      <p className="text-sm font-medium">Upload receipt or invoice</p>
      <p className="text-xs text-slate-500 mt-1">PNG, JPG, PDF up to 10MB</p>
    </div>
  );
}
