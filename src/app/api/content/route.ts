import { notices } from "@/mock/content";

export async function GET() {
  return Response.json(notices);
}
