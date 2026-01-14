export type TicketPriority = "low" | "medium" | "high";
export type TicketStatus = "open" | "in_progress" | "resolved";

export type TicketRecord = {
  id: string;
  title: string;
  type: "billing" | "account" | "content" | "shipping";
  priority: TicketPriority;
  status: TicketStatus;
  requester: string;
  assignee: string;
  createdAt: string;
  sla: "safe" | "warning" | "breach";
};

const baseTickets: TicketRecord[] = [
  {
    id: "TCK-2001",
    title: "주문 #5521 환불 요청",
    type: "billing",
    priority: "high",
    status: "open",
    requester: "김아리",
    assignee: "민지",
    createdAt: "2024-03-07",
    sla: "breach",
  },
  {
    id: "TCK-2002",
    title: "계정 인증 지연",
    type: "account",
    priority: "high",
    status: "in_progress",
    requester: "이노아",
    assignee: "아린",
    createdAt: "2024-03-06",
    sla: "warning",
  },
  {
    id: "TCK-2003",
    title: "콘텐츠 삭제 요청",
    type: "content",
    priority: "medium",
    status: "open",
    requester: "최유나",
    assignee: "소라",
    createdAt: "2024-03-06",
    sla: "warning",
  },
  {
    id: "TCK-2004",
    title: "배송 상태 업데이트 문의",
    type: "shipping",
    priority: "low",
    status: "resolved",
    requester: "김재",
    assignee: "지나",
    createdAt: "2024-03-05",
    sla: "safe",
  },
  {
    id: "TCK-2005",
    title: "결제 수단 업데이트 실패",
    type: "billing",
    priority: "medium",
    status: "open",
    requester: "강세나",
    assignee: "민지",
    createdAt: "2024-03-05",
    sla: "safe",
  },
  {
    id: "TCK-2006",
    title: "비밀번호 재설정 메일 미수신",
    type: "account",
    priority: "medium",
    status: "in_progress",
    requester: "송리나",
    assignee: "아린",
    createdAt: "2024-03-04",
    sla: "warning",
  },
  {
    id: "TCK-2007",
    title: "정책 위반 신고",
    type: "content",
    priority: "high",
    status: "open",
    requester: "이보라",
    assignee: "소라",
    createdAt: "2024-03-04",
    sla: "breach",
  },
  {
    id: "TCK-2008",
    title: "주문 지연 불만",
    type: "shipping",
    priority: "medium",
    status: "in_progress",
    requester: "박카이",
    assignee: "지나",
    createdAt: "2024-03-03",
    sla: "warning",
  },
  {
    id: "TCK-2009",
    title: "구독 업그레이드 문의",
    type: "billing",
    priority: "low",
    status: "resolved",
    requester: "유혜진",
    assignee: "민지",
    createdAt: "2024-03-02",
    sla: "safe",
  },
  {
    id: "TCK-2010",
    title: "계정 삭제 요청",
    type: "account",
    priority: "high",
    status: "open",
    requester: "박루나",
    assignee: "아린",
    createdAt: "2024-03-01",
    sla: "breach",
  },
];

function generateTickets(): TicketRecord[] {
  const extraRounds = 6;
  const generated = Array.from({ length: extraRounds }).flatMap((_, index) => {
    const offset = (index + 1) * baseTickets.length;
    return baseTickets.map((ticket, ticketIndex) => ({
      ...ticket,
      id: `TCK-${String(2001 + offset + ticketIndex).padStart(4, "0")}`,
      title: `${ticket.title} (묶음 ${index + 1})`,
      createdAt: ticket.createdAt,
    }));
  });

  return [...baseTickets, ...generated];
}

export const tickets: TicketRecord[] = generateTickets();
