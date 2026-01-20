"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAuditLogs } from "@/lib/api/audit";
import DataState from "@/components/ui/DataState";

const actionStyles = {
  user_updated: "text-indigo-700 bg-indigo-100",
  ticket_updated: "text-amber-700 bg-amber-100",
  content_published: "text-emerald-700 bg-emerald-100",
  role_changed: "text-rose-700 bg-rose-100",
} as const;

const actionLabels = {
  user_updated: "사용자 변경",
  ticket_updated: "티켓 변경",
  content_published: "콘텐츠 게시",
  role_changed: "권한 변경",
} as const;

export default function AuditTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["audit"],
    queryFn: fetchAuditLogs,
  });
  const [actorFilter, setActorFilter] = useState("all");
  const [actionFilter, setActionFilter] = useState("all");
  const [rangeFilter, setRangeFilter] = useState("7");

  const filteredLogs = useMemo(() => {
    const auditLogs = data ?? [];
    const parsedDates = auditLogs
      .map((log) => ({
        ...log,
        parsedDate: new Date(log.createdAt.replace(" ", "T")),
      }))
      .filter((log) => !Number.isNaN(log.parsedDate.getTime()));

    const latest = parsedDates.reduce((max, log) => {
      return log.parsedDate > max ? log.parsedDate : max;
    }, new Date(0));

    const days = rangeFilter === "all" ? Infinity : Number(rangeFilter);
    const from = new Date(latest);
    from.setDate(latest.getDate() - days);

    return parsedDates.filter((log) => {
      if (actorFilter !== "all" && log.actor !== actorFilter) {
        return false;
      }
      if (actionFilter !== "all" && log.action !== actionFilter) {
        return false;
      }
      return days === Infinity ? true : log.parsedDate >= from;
    });
  }, [actorFilter, actionFilter, rangeFilter, data]);

  if (isLoading) {
    return (
      <DataState
        state="loading"
        title="감사 로그를 불러오는 중입니다"
        description="잠시만 기다려 주세요."
      />
    );
  }

  if (isError) {
    return (
      <DataState
        state="error"
        title="감사 로그를 불러올 수 없습니다"
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
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            감사 로그
          </p>
          <h2 className="text-xl font-semibold text-neutral-900">
            변경 이력
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={actorFilter}
            onChange={(event) => setActorFilter(event.target.value)}
          >
            <option value="all">수정자: 전체</option>
            <option value="민지">민지</option>
            <option value="지나">지나</option>
            <option value="소라">소라</option>
            <option value="아린">아린</option>
          </select>
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={actionFilter}
            onChange={(event) => setActionFilter(event.target.value)}
          >
            <option value="all">액션: 전체</option>
            <option value="user_updated">사용자 변경</option>
            <option value="ticket_updated">티켓 변경</option>
            <option value="content_published">콘텐츠 게시</option>
            <option value="role_changed">권한 변경</option>
          </select>
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={rangeFilter}
            onChange={(event) => setRangeFilter(event.target.value)}
          >
            <option value="7">기간: 7일</option>
            <option value="30">30일</option>
            <option value="90">90일</option>
            <option value="all">전체</option>
          </select>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            <tr>
              <th className="px-3 py-2">수정자</th>
              <th className="px-3 py-2">액션</th>
              <th className="px-3 py-2">대상</th>
              <th className="px-3 py-2">상세</th>
              <th className="px-3 py-2">시간</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-neutral-200 text-sm last:border-none"
              >
                <td className="px-3 py-4 font-semibold text-neutral-900">
                  {log.actor}
                </td>
                <td className="px-3 py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${actionStyles[log.action]}`}
                  >
                    {actionLabels[log.action]}
                  </span>
                </td>
                <td className="px-3 py-4 text-neutral-600">{log.target}</td>
                <td className="px-3 py-4 text-neutral-600">{log.detail}</td>
                <td className="px-3 py-4 text-neutral-600">{log.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
