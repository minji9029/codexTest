import { apiFetch } from "@/lib/api/client";
import type { AuditRecord } from "@/mock/audit";

export function fetchAuditLogs() {
  return apiFetch<AuditRecord[]>("/api/audit");
}
