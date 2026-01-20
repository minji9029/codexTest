import { tickets } from "@/mock/tickets";

export async function GET() {
  return Response.json(tickets);
}
