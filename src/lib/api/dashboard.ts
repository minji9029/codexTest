import { apiFetch } from "@/lib/api/client";
import type { Kpi, QueueItem, TrendPoint } from "@/mock/dashboard";

export type DashboardResponse = {
  kpis: Kpi[];
  trendSeries: TrendPoint[];
  queueItems: QueueItem[];
};

export function fetchDashboard() {
  return apiFetch<DashboardResponse>("/api/dashboard");
}
