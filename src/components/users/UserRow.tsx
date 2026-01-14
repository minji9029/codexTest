import type { UserRecord } from "@/mock/users";
import Link from "next/link";

const statusStyles = {
  active: "text-emerald-700 bg-emerald-100",
  suspended: "text-rose-700 bg-rose-100",
  pending: "text-amber-700 bg-amber-100",
} as const;

const tierStyles = {
  standard: "text-neutral-700 bg-neutral-100",
  premium: "text-sky-700 bg-sky-100",
  enterprise: "text-indigo-700 bg-indigo-100",
} as const;

const tierLabels = {
  standard: "일반",
  premium: "프리미엄",
  enterprise: "엔터프라이즈",
} as const;

const statusLabels = {
  active: "활성",
  suspended: "정지",
  pending: "대기",
} as const;

export default function UserRow({ user }: { user: UserRecord }) {
  return (
    <tr className="border-b border-neutral-200 text-sm last:border-none">
      <td className="px-3 py-4">
        <div className="flex flex-col">
          <Link
            href={`/users/${user.id}`}
            className="font-semibold text-neutral-900 hover:underline"
          >
            {user.name}
          </Link>
          <span className="text-xs text-neutral-500">{user.email}</span>
        </div>
      </td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-2 py-1 text-xs ${tierStyles[user.tier]}`}
        >
          {tierLabels[user.tier]}
        </span>
      </td>
      <td className="px-3 py-4">
        <span
          className={`rounded-full px-2 py-1 text-xs ${statusStyles[user.status]}`}
        >
          {statusLabels[user.status]}
        </span>
      </td>
      <td className="px-3 py-4 text-neutral-600">{user.joinedAt}</td>
      <td className="px-3 py-4 text-neutral-600">{user.lastActive}</td>
      <td className="px-3 py-4 text-neutral-600">{user.owner}</td>
    </tr>
  );
}
