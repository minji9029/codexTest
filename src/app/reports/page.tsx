import AgentPerformance from "@/components/reports/AgentPerformance";
import ReportsTrend from "@/components/reports/ReportsTrend";

export default function ReportsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">리포트</h1>
          <p className="mt-2 text-sm text-neutral-600">
            성과 분석과 내보내기
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            CSV 내보내기
          </button>
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
            리포트 공유
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
          <option>기간: 최근 7일</option>
          <option>최근 30일</option>
          <option>이번 분기</option>
        </select>
        <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
          <option>팀: 전체</option>
          <option>고객 지원</option>
          <option>신뢰 & 안전</option>
          <option>결제</option>
        </select>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
        <ReportsTrend />
        <AgentPerformance />
      </div>
    </main>
  );
}
