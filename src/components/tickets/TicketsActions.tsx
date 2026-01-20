"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTickets } from "@/lib/api/tickets";
import { downloadCsv } from "@/lib/utils/csv";

export default function TicketsActions() {
  const { data } = useQuery({
    queryKey: ["tickets"],
    queryFn: fetchTickets,
  });

  const handleExport = () => {
    if (!data) {
      return;
    }
    downloadCsv(
      "tickets.csv",
      data.map((ticket) => ({
        제목: ticket.title,
        유형: ticket.type,
        우선순위: ticket.priority,
        상태: ticket.status,
        요청자: ticket.requester,
        담당자: ticket.assignee,
        생성일: ticket.createdAt,
        SLA: ticket.sla,
      }))
    );
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
        onClick={handleExport}
      >
        CSV 내보내기
      </button>
      <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
        새 티켓
      </button>
    </div>
  );
}
