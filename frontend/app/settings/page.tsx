import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SUPPORTED_CURRENCIES } from "@/lib/constants";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings & Preferences
        </h1>
        <p className="text-sm text-slate-500">
          Configure currency, theme, and data management options.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Default Currency</label>
            <select className="h-10 rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 text-sm">
              {SUPPORTED_CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} - {c.name} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
