import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Sign In</CardTitle>
          <p className="text-xs text-slate-500 mt-1">Access your Expense Tracker account</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-sm text-slate-500 py-6 border border-dashed rounded-lg">
            Login form & auth provider components placeholder
          </div>
          <div className="text-center text-xs text-slate-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-emerald-600 hover:underline">
              Create an account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
