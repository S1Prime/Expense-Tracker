"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <form className="space-y-4">
      <Input label="Email address" type="email" placeholder="you@example.com" required />
      <Input label="Password" type="password" placeholder="••••••••" required />
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}
