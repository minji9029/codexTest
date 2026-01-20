import { apiFetch } from "@/lib/api/client";
import type { UserRecord } from "@/mock/users";

export function fetchUsers() {
  return apiFetch<UserRecord[]>("/api/users");
}
