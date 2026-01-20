import { apiFetch } from "@/lib/api/client";
import type { AgentMetric, DailyMetric } from "@/mock/reports";

export type ReportsResponse = {
  agentMetrics: AgentMetric[];
  dailyMetrics: DailyMetric[];
};

export function fetchReports() {
  return apiFetch<ReportsResponse>("/api/reports");
}
