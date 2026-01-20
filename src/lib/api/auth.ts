import { apiFetch } from "@/lib/api/client";

export type LoginResponse = {
  ok: boolean;
  role: "admin" | "manager" | "staff";
};

export function login(email: string, password: string) {
  return apiFetch<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}
