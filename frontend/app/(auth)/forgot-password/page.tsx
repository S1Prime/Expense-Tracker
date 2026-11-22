import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Reset Password</CardTitle>
          <p className="text-xs text-slate-500 mt-1">Enter your email to receive recovery instructions</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-slate-500 py-6 border border-dashed rounded-lg">
            Password reset form placeholder
          </div>
          <div className="text-center text-xs text-slate-500">
            Remember your credentials?{" "}
            <Link href="/login" className="text-emerald-600 hover:underline">
              Back to Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
