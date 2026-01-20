"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchContent } from "@/lib/api/content";
import Link from "next/link";
import DataState from "@/components/ui/DataState";
import { readLocalNotices } from "@/lib/content/store";

const statusStyles = {
  scheduled: "text-amber-700 bg-amber-100",
  live: "text-emerald-700 bg-emerald-100",
  ended: "text-neutral-600 bg-neutral-100",
} as const;

export default function ContentTable() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [authorFilter, setAuthorFilter] = useState("all");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
  });

  const notices = useMemo(() => {
    const remote = data ?? [];
    const local = readLocalNotices();
    const merged = new Map<string, (typeof remote)[number]>();
    remote.forEach((item) => merged.set(item.id, item));
    local.forEach((item) => merged.set(item.id, item));
    return Array.from(merged.values()).sort((a, b) => {
      const aDate = new Date(a.createdAt).getTime();
      const bDate = new Date(b.createdAt).getTime();
      return bDate - aDate;
    });
  }, [data]);

  const filteredNotices = useMemo(() => {
    return notices.filter((notice) => {
      if (statusFilter !== "all") {
        const mappedStatus =
          statusFilter === "draft"
            ? notice.isDraft
              ? "draft"
              : "skip"
            : statusFilter;
        if (mappedStatus === "skip") {
          return false;
        }
        if (statusFilter === "draft" && !notice.isDraft) {
          return false;
        }
        if (statusFilter !== "draft" && notice.status !== statusFilter) {
          return false;
        }
      }
      if (authorFilter !== "all" && notice.author !== authorFilter) {
        return false;
      }
      return true;
    });
  }, [notices, statusFilter, authorFilter]);

  if (isLoading) {
    return (
      <DataState
        state="loading"
        title="공지 목록을 불러오는 중입니다"
        description="잠시만 기다려 주세요."
      />
    );
  }

  if (isError) {
    return (
      <DataState
        state="error"
        title="공지 목록을 불러올 수 없습니다"
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
            콘텐츠
          </p>
          <h2 className="text-xl font-semibold text-neutral-900">
            공지 사항
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="all">상태: 전체</option>
            <option value="draft">임시</option>
            <option value="live">게시 중</option>
            <option value="scheduled">예약</option>
            <option value="ended">종료</option>
          </select>
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={authorFilter}
            onChange={(event) => setAuthorFilter(event.target.value)}
          >
            <option value="all">작성자: 전체</option>
            <option value="민지">민지</option>
            <option value="지나">지나</option>
            <option value="소라">소라</option>
            <option value="아린">아린</option>
          </select>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            <tr>
              <th className="px-3 py-2">제목</th>
              <th className="px-3 py-2">상태</th>
              <th className="px-3 py-2">작성자</th>
              <th className="px-3 py-2">시작</th>
              <th className="px-3 py-2">종료</th>
              <th className="px-3 py-2">작성일</th>
              <th className="px-3 py-2">작업</th>
            </tr>
          </thead>
          <tbody>
            {filteredNotices.map((notice) => (
              <tr
                key={notice.id}
                className="border-b border-neutral-200 text-sm last:border-none"
              >
                <td className="px-3 py-4 font-semibold text-neutral-900">
                  {notice.title}
                </td>
                <td className="px-3 py-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${statusStyles[notice.status]}`}
                  >
                    {notice.isDraft
                      ? "임시"
                      : notice.status === "live"
                      ? "게시 중"
                      : notice.status === "scheduled"
                      ? "예약"
                      : "종료"}
                  </span>
                </td>
                <td className="px-3 py-4 text-neutral-600">{notice.author}</td>
                <td className="px-3 py-4 text-neutral-600">{notice.startsAt}</td>
                <td className="px-3 py-4 text-neutral-600">{notice.endsAt}</td>
                <td className="px-3 py-4 text-neutral-600">{notice.createdAt}</td>
                <td className="px-3 py-4">
                  <Link
                    href={`/content/${encodeURIComponent(notice.id)}/edit`}
                    className="text-sm font-semibold text-neutral-900 hover:underline"
                  >
                    수정
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
