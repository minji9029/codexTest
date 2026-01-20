"use client";

import { useQuery } from "@tanstack/react-query";
import AgentPerformance from "@/components/reports/AgentPerformance";
import ReportsTrend from "@/components/reports/ReportsTrend";
import DataState from "@/components/ui/DataState";
import { fetchReports } from "@/lib/api/reports";

export default function ReportsView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reports"],
    queryFn: fetchReports,
  });

  if (isLoading) {
    return (
      <DataState
        state="loading"
        title="리포트를 불러오는 중입니다"
        description="잠시만 기다려 주세요."
      />
    );
  }

  if (isError) {
    return (
      <DataState
        state="error"
        title="리포트를 불러올 수 없습니다"
        description="네트워크 상태를 확인하고 다시 시도하세요."
        action={
          <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
            재시도
          </button>
        }
      />
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
      <ReportsTrend data={data?.dailyMetrics ?? []} />
      <AgentPerformance data={data?.agentMetrics ?? []} />
    </div>
  );
}
