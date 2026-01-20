"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAuditLogs } from "@/lib/api/audit";
import { downloadCsv } from "@/lib/utils/csv";

export default function AuditActions() {
  const { data } = useQuery({
    queryKey: ["audit"],
    queryFn: fetchAuditLogs,
  });

  const handleExport = () => {
    if (!data) {
      return;
    }
    downloadCsv(
      "audit-logs.csv",
      data.map((log) => ({
        수정자: log.actor,
        액션: log.action,
        대상: log.target,
        상세: log.detail,
        시간: log.createdAt,
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
        뷰 저장
      </button>
    </div>
  );
}
