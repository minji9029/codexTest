"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentRole, roleLabels } from "@/lib/roles";
import { navItems } from "@/components/navigation/navItems";

export default function Sidebar() {
  const pathname = usePathname();
  const role = getCurrentRole();

  return (
    <aside className="hidden h-full w-64 min-w-64 max-w-64 flex-shrink-0 flex-col border-r border-neutral-200 bg-white/80 p-6 backdrop-blur lg:flex">
      <div className="text-lg font-semibold text-neutral-900">운영 콘솔</div>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
        운영 센터
      </p>
      <nav className="mt-8 flex flex-1 flex-col gap-2">
        {navItems
          .filter((item) => item.roles.includes(role))
          .map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
      </nav>
      <div className="rounded-lg bg-neutral-50 p-3 text-xs text-neutral-500">
        현재 권한: {roleLabels[role]}
      </div>
    </aside>
  );
}
