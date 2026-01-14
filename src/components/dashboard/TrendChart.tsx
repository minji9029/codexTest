"use client";

import type { TooltipProps } from "recharts";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { trendSeries } from "@/mock/dashboard";
import DataState, { DataState as DataStateType } from "@/components/ui/DataState";

function TrendTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) {
    return null;
  }

  const current = payload.find((entry) => entry.dataKey === "current");
  const previous = payload.find((entry) => entry.dataKey === "previous");

  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-neutral-900">
        {current?.value ?? 0}건
      </p>
      <p className="mt-1 text-xs text-neutral-500">
        이전 기간: {previous?.value ?? 0}
      </p>
    </div>
  );
}

export default function TrendChart() {
  const state: DataStateType = "ready";

  if (state === "loading") {
    return (
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="h-4 w-24 rounded-full bg-neutral-200" />
        <div className="mt-6 h-48 animate-pulse rounded-xl bg-neutral-100" />
      </section>
    );
  }

  if (state === "empty") {
    return (
      <DataState
        state={state}
        title="추이 데이터가 없습니다"
        description="기간을 선택하면 티켓 추이를 볼 수 있습니다."
      />
    );
  }

  if (state === "error") {
    return (
      <DataState
        state={state}
        title="추이 데이터를 불러올 수 없습니다"
        description="잠시 후 다시 시도해 주세요."
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
            추이
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            티켓 추이
          </h2>
        </div>
        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          최근 7일
        </div>
      </div>
      <div className="mt-6 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendSeries} margin={{ top: 8, right: 8, left: -8 }}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={24} />
            <Tooltip
              content={<TrendTooltip />}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#111827"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="6 6"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-900" />
          현재 기간
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          이전 기간
        </span>
      </div>
    </section>
  );
}
