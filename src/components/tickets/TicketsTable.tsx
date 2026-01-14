"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { tickets as mockTickets } from "@/mock/tickets";
import TicketRow from "@/components/tickets/TicketRow";
import TicketQuestCard from "@/components/tickets/TicketQuestCard";
import TicketRewardPanel from "@/components/tickets/TicketRewardPanel";

const PAGE_SIZE = 8;

export default function TicketsTable() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [assigneeFilter, setAssigneeFilter] = useState("all");
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const tickets = useMemo(() => mockTickets, []);
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      if (statusFilter !== "all" && ticket.status !== statusFilter) {
        return false;
      }
      if (priorityFilter !== "all" && ticket.priority !== priorityFilter) {
        return false;
      }
      if (assigneeFilter !== "all" && ticket.assignee !== assigneeFilter) {
        return false;
      }
      return true;
    });
  }, [tickets, statusFilter, priorityFilter, assigneeFilter]);
  const visibleTickets = filteredTickets.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTickets.length;
  const skeletonCount = hasMore ? 3 : 0;

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handlePriorityChange = (value: string) => {
    setPriorityFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleAssigneeChange = (value: string) => {
    setAssigneeFilter(value);
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
            Math.min(count + PAGE_SIZE, filteredTickets.length)
          );
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [filteredTickets.length]);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <TicketQuestCard />
        <TicketRewardPanel />
      </div>
      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            티켓
          </p>
          <h1 className="text-xl font-semibold text-neutral-900">
            요청 큐
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={statusFilter}
            onChange={(event) => handleStatusChange(event.target.value)}
          >
            <option value="all">상태: 전체</option>
            <option value="open">대기</option>
            <option value="in_progress">진행 중</option>
            <option value="resolved">완료</option>
          </select>
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={priorityFilter}
            onChange={(event) => handlePriorityChange(event.target.value)}
          >
            <option value="all">우선순위: 전체</option>
            <option value="high">높음</option>
            <option value="medium">중간</option>
            <option value="low">낮음</option>
          </select>
          <select
            className="rounded-full border border-neutral-200 bg-white px-3 py-1"
            value={assigneeFilter}
            onChange={(event) => handleAssigneeChange(event.target.value)}
          >
            <option value="all">담당자: 전체</option>
            <option value="민지">민지</option>
            <option value="지나">지나</option>
            <option value="소라">소라</option>
            <option value="아린">아린</option>
          </select>
        </div>
      </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            <tr>
              <th className="px-3 py-2">제목</th>
              <th className="px-3 py-2">우선순위</th>
              <th className="px-3 py-2">상태</th>
              <th className="px-3 py-2">요청자</th>
              <th className="px-3 py-2">담당자</th>
              <th className="px-3 py-2">생성일</th>
              <th className="px-3 py-2">SLA</th>
            </tr>
          </thead>
            <tbody>
              {visibleTickets.map((ticket) => (
                <TicketRow key={ticket.id} ticket={ticket} />
              ))}
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <tr
                  key={`ticket-skeleton-${index}`}
                  className="border-b border-neutral-200"
                >
                  <td colSpan={7} className="px-3 py-4">
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
