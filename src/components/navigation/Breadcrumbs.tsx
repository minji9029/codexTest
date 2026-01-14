"use client";

import Link from "next/link";
import { Fragment } from "react";
import { usePathname } from "next/navigation";

const segmentLabels: Record<string, string> = {
  dashboard: "대시보드",
  users: "사용자",
  tickets: "티켓",
  content: "콘텐츠",
  reports: "리포트",
  settings: "설정",
  roles: "권한",
  "audit-logs": "감사 로그",
  login: "로그인",
  new: "작성",
  edit: "수정",
};

function formatSegment(segment: string) {
  const cleaned = segment.replace(/\[(.+?)\]/g, "$1");
  return segmentLabels[cleaned] ?? cleaned.replace(/-/g, " ");
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return <span className="text-sm text-neutral-500">대시보드</span>;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/dashboard" className="hover:text-neutral-900">
            대시보드
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <Fragment key={href}>
              <li className="text-neutral-300">/</li>
              <li>
                {isLast ? (
                  <span className="text-neutral-900">
                    {formatSegment(segment)}
                  </span>
                ) : (
                  <Link href={href} className="hover:text-neutral-900">
                    {formatSegment(segment)}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
