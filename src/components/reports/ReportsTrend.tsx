"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dailyMetrics } from "@/mock/reports";

export default function ReportsTrend() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            추이
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            처리 vs 완료
          </h2>
        </div>
        <div className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
          최근 7일
        </div>
      </div>
      <div className="mt-6 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyMetrics} margin={{ top: 8, left: -10, right: 8 }}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={24} />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                boxShadow: "0 12px 24px rgba(15, 23, 42, 0.08)",
              }}
            />
            <Bar dataKey="handled" fill="#111827" radius={[6, 6, 0, 0]} />
            <Bar dataKey="resolved" fill="#94a3b8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neutral-900" />
          처리
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          완료
        </span>
      </div>
    </section>
  );
}
