import { notices } from "@/mock/content";
import Link from "next/link";

const statusStyles = {
  scheduled: "text-amber-700 bg-amber-100",
  live: "text-emerald-700 bg-emerald-100",
  ended: "text-neutral-600 bg-neutral-100",
} as const;

export default function ContentTable() {
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
          <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
            <option>상태: 전체</option>
            <option>게시 중</option>
            <option>예약</option>
            <option>종료</option>
          </select>
          <select className="rounded-full border border-neutral-200 bg-white px-3 py-1">
            <option>작성자: 전체</option>
            <option>민지</option>
            <option>지나</option>
            <option>소라</option>
            <option>아린</option>
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
            {notices.map((notice) => (
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
                    {notice.status === "live"
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
                    href={`/content/${notice.id}/edit`}
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
