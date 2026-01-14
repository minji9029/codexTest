export type AuditAction =
  | "user_updated"
  | "ticket_updated"
  | "content_published"
  | "role_changed";

export type AuditRecord = {
  id: string;
  actor: string;
  action: AuditAction;
  target: string;
  createdAt: string;
  detail: string;
};

const baseRecords: AuditRecord[] = [
  {
    id: "AUD-9001",
    actor: "민지",
    action: "user_updated",
    target: "USR-018",
    createdAt: "2024-03-07 09:12",
    detail: "상태를 대기에서 활성으로 변경.",
  },
  {
    id: "AUD-9002",
    actor: "지나",
    action: "ticket_updated",
    target: "TCK-2007",
    createdAt: "2024-03-07 08:58",
    detail: "우선순위를 높음으로 설정, SLA 경고 표시.",
  },
  {
    id: "AUD-9003",
    actor: "소라",
    action: "content_published",
    target: "CNT-103",
    createdAt: "2024-03-06 15:41",
    detail: "배송 지연 안내를 게시.",
  },
  {
    id: "AUD-9004",
    actor: "아린",
    action: "role_changed",
    target: "스태프 → 매니저",
    createdAt: "2024-03-06 10:11",
    detail: "매니저 역할에 리포트 권한 부여.",
  },
  {
    id: "AUD-9005",
    actor: "민지",
    action: "ticket_updated",
    target: "TCK-2002",
    createdAt: "2024-03-05 19:22",
    detail: "담당자를 아린으로 변경.",
  },
];

function generateAudit(): AuditRecord[] {
  const extraRounds = 4;
  const generated = Array.from({ length: extraRounds }).flatMap((_, index) => {
    const offset = (index + 1) * baseRecords.length;
    return baseRecords.map((record, recordIndex) => ({
      ...record,
      id: `AUD-${String(9001 + offset + recordIndex).padStart(4, "0")}`,
      detail: `${record.detail} (묶음 ${index + 1})`,
    }));
  });

  return [...baseRecords, ...generated];
}

export const auditLogs: AuditRecord[] = generateAudit();
