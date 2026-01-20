"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/lib/api/users";
import UserRow from "@/components/users/UserRow";
import UserQuestCard from "@/components/users/UserQuestCard";
import UserRewardPanel from "@/components/users/UserRewardPanel";
import DataState from "@/components/ui/DataState";

const PAGE_SIZE = 10;

export default function UsersInfiniteList() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const filteredUsers = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    const users = data ?? [];
    if (!keyword) {
      return users;
    }
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
      );
    });
  }, [query, data]);

  const visibleUsers = filteredUsers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredUsers.length;
  const skeletonCount = hasMore ? 3 : 0;

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  useEffect(() => {
    if (!loaderRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + PAGE_SIZE, filteredUsers.length)
          );
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [filteredUsers.length]);

  if (isLoading) {
    return (
      <DataState
        state="loading"
        title="사용자 데이터를 불러오는 중입니다"
        description="잠시만 기다려 주세요."
      />
    );
  }

  if (isError) {
    return (
      <DataState
        state="error"
        title="사용자 목록을 불러올 수 없습니다"
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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">사용자</h1>
          <p className="mt-1 text-sm text-neutral-600">
            사용자 계정을 검색하고 관리합니다.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            필터
          </button>
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
            사용자 추가
          </button>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <UserQuestCard />
        <UserRewardPanel />
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            placeholder="이름 또는 이메일로 검색"
            className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400 sm:max-w-xs"
          />
          <div className="text-xs text-neutral-500">
            {filteredUsers.length}명 중 {visibleUsers.length}명 표시
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              <tr>
                <th className="px-3 py-2">사용자</th>
                <th className="px-3 py-2">등급</th>
                <th className="px-3 py-2">상태</th>
                <th className="px-3 py-2">가입일</th>
                <th className="px-3 py-2">최근 접속</th>
                <th className="px-3 py-2">담당자</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.map((user) => (
                <UserRow key={user.id} user={user} />
              ))}
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <tr
                  key={`user-skeleton-${index}`}
                  className="border-b border-neutral-200"
                >
                  <td colSpan={6} className="px-3 py-4">
                    <div className="h-6 w-full animate-pulse rounded-xl bg-neutral-100" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <div className="mt-4 text-center text-xs text-neutral-500">
        {hasMore ? "불러오는 중..." : "목록 끝"}
      </div>
        <div ref={loaderRef} className="h-6" />
      </div>
    </div>
  );
}
