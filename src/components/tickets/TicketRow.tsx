import type { TicketRecord } from "@/mock/tickets";
import Link from "next/link";

const priorityStyles = {
  low: "text-neutral-700 bg-neutral-100",
  medium: "text-amber-700 bg-amber-100",
  high: "text-rose-700 bg-rose-100",
} as const;

const statusStyles = {
  open: "text-indigo-700 bg-indigo-100",
  in_progress: "text-sky-700 bg-sky-100",
  resolved: "text-emerald-700 bg-emerald-100",
} as const;

const slaStyles = {
  safe: "text-emerald-700 bg-emerald-100",
  warning: "text-amber-700 bg-amber-100",
  breach: "text-rose-700 bg-rose-100",
} as const;

const priorityLabels = {
  low: "낮음",
  medium: "중간",
  high: "높음",
} as const;

const statusLabels = {
  open: "대기",
  in_progress: "진행 중",
  resolved: "완료",
} as const;

const typeLabels = {
  billing: "결제",
  account: "계정",
  content: "콘텐츠",
  shipping: "배송",
} as const;

const slaLabels = {
  safe: "안전",
  warning: "임박",
  breach: "초과",
} as const;

export default function TicketRow({ ticket }: { ticket: TicketRecord }) {
  return (
    <tr className="border-b border-neutral-200 text-sm last:border-none">
      <td className="px-3 py-4">
        <div className="flex flex-col">
          <Link
            href={`/tickets/${ticket.id}`}
            className="font-semibold text-neutral-900 hover:underline"
          >
            {ticket.title}
          </Link>
          <span className="text-xs text-neutral-500">
            {typeLabels[ticket.type]}
          </span>
        </div>
      </td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-2 py-1 text-xs ${priorityStyles[ticket.priority]}`}
        >
          {priorityLabels[ticket.priority]}
        </span>
      </td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-2 py-1 text-xs ${statusStyles[ticket.status]}`}
        >
          {statusLabels[ticket.status]}
        </span>
      </td>
      <td className="px-3 py-4 text-neutral-600">{ticket.requester}</td>
      <td className="px-3 py-4 text-neutral-600">{ticket.assignee}</td>
      <td className="px-3 py-4 text-neutral-600">{ticket.createdAt}</td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-2 py-1 text-xs ${slaStyles[ticket.sla]}`}
        >
          SLA {slaLabels[ticket.sla]}
        </span>
      </td>
    </tr>
  );
}
