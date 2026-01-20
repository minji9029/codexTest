import { agentMetrics, dailyMetrics } from "@/mock/reports";

export async function GET() {
  return Response.json({ agentMetrics, dailyMetrics });
}
