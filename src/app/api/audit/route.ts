import { auditLogs } from "@/mock/audit";

export async function GET() {
  return Response.json(auditLogs);
}
