import ReportsView from "@/components/reports/ReportsView";
import ReportsActions from "@/components/reports/ReportsActions";

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
        <ReportsActions />
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
      <ReportsView />
    </main>
  );
}
