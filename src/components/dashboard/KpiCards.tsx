import type { Kpi } from "@/mock/dashboard";
import DataState, { DataState as DataStateType } from "@/components/ui/DataState";

const trendClasses = {
  up: "text-emerald-600 bg-emerald-50",
  down: "text-rose-600 bg-rose-50",
  flat: "text-neutral-600 bg-neutral-100",
} as const;

export default function KpiCards({
  kpis,
  state = "ready",
}: {
  kpis: Kpi[];
  state?: DataStateType;
}) {
  if (state === "loading") {
    return (
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={`kpi-skeleton-${index}`}
            className="min-h-[120px] animate-pulse rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="h-4 w-24 rounded-full bg-neutral-200" />
            <div className="mt-6 h-8 w-16 rounded-full bg-neutral-200" />
          </div>
        ))}
      </section>
    );
  }

  if (state === "empty") {
    return (
      <DataState
        state={state}
        title="KPI 데이터가 없습니다"
        description="데이터가 들어오면 핵심 지표가 표시됩니다."
      />
    );
  }

  if (state === "error") {
    return (
      <DataState
        state={state}
        title="KPI 데이터를 불러올 수 없습니다"
        description="데이터 소스를 확인하고 다시 시도하세요."
        action={
          <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
            재시도
          </button>
        }
      />
    );
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const signal =
          kpi.trend === kpi.goodTrend
            ? "bg-emerald-500"
            : "bg-rose-500";

        return (
        <div
          key={kpi.id}
          className="relative flex min-h-[120px] flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
        >
          <div className={`absolute left-0 top-0 h-1 w-full ${signal}`} />
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm text-neutral-500">{kpi.label}</p>
            <span
              title={kpi.description}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-[10px] font-semibold text-neutral-500"
            >
              i
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-2xl font-semibold text-neutral-900">
              {kpi.value}
            </p>
            <div className="flex flex-col items-end gap-1 text-xs">
              <span
                className={`rounded-full px-2 py-1 font-medium ${trendClasses[kpi.trend]}`}
              >
                {kpi.delta}
              </span>
              <span
              className={`text-[11px] ${
                  kpi.trend === kpi.goodTrend
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
              >
                {kpi.trend === kpi.goodTrend ? "정상" : "주의 필요"}
              </span>
            </div>
          </div>
        </div>
      );
      })}
    </section>
  );
}
