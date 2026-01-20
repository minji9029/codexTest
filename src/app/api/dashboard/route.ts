import { kpis, queueItems, trendSeries } from "@/mock/dashboard";

export async function GET() {
  return Response.json({ kpis, trendSeries, queueItems });
}
