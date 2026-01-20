"use client";

import { useQuery } from "@tanstack/react-query";
import KpiCards from "@/components/dashboard/KpiCards";
import TrendChart from "@/components/dashboard/TrendChart";
import WorkQueue from "@/components/dashboard/WorkQueue";
import QuestBoard from "@/components/dashboard/QuestBoard";
import Leaderboard from "@/components/dashboard/Leaderboard";
import { fetchDashboard } from "@/lib/api/dashboard";

export default function DashboardView() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
  });

  const state = isLoading ? "loading" : isError ? "error" : "ready";
  const kpis = data?.kpis ?? [];
  const trendSeries = data?.trendSeries ?? [];
  const queueItems = data?.queueItems ?? [];

  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">대시보드</h1>
          <p className="mt-2 text-sm text-neutral-600">
            KPI 요약, 추이, 작업 큐
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
            내 작업
          </button>
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            새 티켓
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            기간
          </p>
          <p className="text-sm font-semibold text-neutral-900">
            2024.03.01 – 2024.03.07
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {["오늘", "7일", "30일", "분기"].map((label) => (
            <button
              key={label}
              className={`rounded-full px-3 py-1 font-medium ${
                label === "7일"
                  ? "bg-neutral-900 text-white"
                  : "border border-neutral-200 text-neutral-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <KpiCards kpis={kpis} state={state} />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <QuestBoard />
        <Leaderboard />
      </div>
      <div className="grid gap-6 lg:grid-cols-[2fr_1.2fr]">
        <TrendChart trendSeries={trendSeries} state={state} />
        <WorkQueue items={queueItems} state={state} />
      </div>
    </main>
  );
}
