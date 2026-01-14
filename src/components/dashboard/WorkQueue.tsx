import { queueItems } from "@/mock/dashboard";
import DataState, { DataState as DataStateType } from "@/components/ui/DataState";

const priorityStyles = {
  low: "text-neutral-500 bg-neutral-100",
  medium: "text-amber-700 bg-amber-100",
  high: "text-rose-700 bg-rose-100",
} as const;

const slaStyles = {
  safe: "text-emerald-700 bg-emerald-100",
  warning: "text-amber-700 bg-amber-100",
  breach: "text-rose-700 bg-rose-100",
} as const;

const slaOrder = {
  breach: 0,
  warning: 1,
  safe: 2,
} as const;

export default function WorkQueue() {
  const state: DataStateType = "ready";
  const items = [...queueItems].sort(
    (a, b) => slaOrder[a.sla] - slaOrder[b.sla]
  );

  if (state === "loading") {
    return (
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="h-4 w-32 rounded-full bg-neutral-200" />
        <div className="mt-6 space-y-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={`queue-skeleton-${index}`}
              className="h-12 animate-pulse rounded-xl bg-neutral-100"
            />
          ))}
        </div>
      </section>
    );
  }

  if (state === "empty") {
    return (
      <DataState
        state={state}
        title="할당된 항목이 없습니다"
        description="현재 처리할 항목이 없습니다."
      />
    );
  }

  if (state === "error") {
    return (
      <DataState
        state={state}
        title="작업 큐를 불러올 수 없습니다"
        description="새로고침하거나 연결 상태를 확인하세요."
        action={
          <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
            재시도
          </button>
        }
      />
    );
  }

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            작업 큐
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            내가 처리할 항목
          </h2>
        </div>
        <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
          전체 보기
        </button>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
          <option>상태: 전체</option>
          <option>대기</option>
          <option>진행 중</option>
          <option>완료</option>
        </select>
        <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
          <option>우선순위: 전체</option>
          <option>높음</option>
          <option>중간</option>
          <option>낮음</option>
        </select>
        <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
          <option>정렬: SLA 긴급도</option>
          <option>정렬: 최신순</option>
          <option>정렬: 우선순위</option>
        </select>
      </div>
      <div className="mt-4 divide-y divide-neutral-200">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-2 border-l-4 py-4 pl-4 sm:flex-row sm:items-center sm:justify-between ${
              item.sla === "breach"
                ? "border-rose-500"
                : item.sla === "warning"
                ? "border-amber-500"
                : "border-emerald-500"
            }`}
          >
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {item.title}
              </div>
              <div className="mt-1 text-xs text-neutral-500">
                {item.id} · 담당자: {item.assignee}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${priorityStyles[item.priority]}`}
              >
                {item.priority === "high"
                  ? "높음"
                  : item.priority === "medium"
                  ? "중간"
                  : "낮음"}
              </span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${slaStyles[item.sla]}`}
              >
                SLA {item.sla === "breach" ? "초과" : item.sla === "warning" ? "임박" : "안전"}
              </span>
              <span className="text-xs text-neutral-500">
                {item.sla === "breach"
                  ? "기한 초과"
                  : item.sla === "warning"
                  ? "곧 만료"
                  : "목표 내"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
