"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchReports } from "@/lib/api/reports";
import { downloadCsv } from "@/lib/utils/csv";

export default function ReportsActions() {
  const { data } = useQuery({
    queryKey: ["reports"],
    queryFn: fetchReports,
  });

  const handleExport = () => {
    if (!data) {
      return;
    }
    downloadCsv(
      "reports.csv",
      data.agentMetrics.map((item) => ({
        담당자: item.name,
        처리건수: item.handled,
        평균시간: item.avgHandleTime,
        완료율: item.completionRate,
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
        리포트 공유
      </button>
    </div>
  );
}
