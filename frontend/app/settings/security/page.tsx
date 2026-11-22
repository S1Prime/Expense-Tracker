import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SecuritySettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Security & Privacy</h2>
        <p className="text-sm text-slate-500">Update password and manage session credentials.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-sm text-slate-500 py-8 border border-dashed rounded-lg">
            Change password & 2FA placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
