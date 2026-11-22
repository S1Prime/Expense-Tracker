import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ProfileSettingsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-semibold">User Profile</h2>
        <p className="text-sm text-slate-500">Manage display name, avatar, and personal info.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="text-center text-sm text-slate-500 py-8 border border-dashed rounded-lg">
            Profile edit form placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
