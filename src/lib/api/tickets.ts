import { apiFetch } from "@/lib/api/client";
import type { TicketRecord } from "@/mock/tickets";

export function fetchTickets() {
  return apiFetch<TicketRecord[]>("/api/tickets");
}
