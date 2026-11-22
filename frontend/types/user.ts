export interface User {
  id: string;
  email: string;
  name?: string | null;
  avatarUrl?: string | null;
  currency: string;
  theme: "light" | "dark" | "system";
  createdAt: Date | string;
  updatedAt: Date | string;
}
