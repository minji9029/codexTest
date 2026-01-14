"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { getCurrentRole } from "@/lib/roles";
import { navItems } from "@/components/navigation/navItems";

export default function MobileNav() {
  const pathname = usePathname();
  const role = getCurrentRole();
  const [isOpen, setIsOpen] = useState(false);

  const items = useMemo(
    () => navItems.filter((item) => item.roles.includes(role)),
    [role]
  );
  const primaryHrefs = new Set([
    "/dashboard",
    "/tickets",
    "/users",
    "/reports",
  ]);
  const primaryItems = items.filter((item) => primaryHrefs.has(item.href));
  const extraItems = items.filter((item) => !primaryHrefs.has(item.href));

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-neutral-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
        <ul className="flex items-center justify-between gap-2">
          {primaryItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-medium transition ${
                    isActive ? "text-neutral-900" : "text-neutral-500"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
          {extraItems.length > 0 && (
            <li className="flex-1">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex w-full flex-col items-center gap-1 rounded-xl py-2 text-[11px] font-medium text-neutral-500 transition hover:text-neutral-900"
                aria-expanded={isOpen}
                aria-controls="mobile-more-panel"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-300 text-[10px] text-neutral-500">
                  +
                </span>
                더보기
              </button>
            </li>
          )}
        </ul>
      </nav>
      <div
        className={`fixed inset-0 z-30 bg-black/20 transition ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        } lg:hidden`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-more-panel"
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col gap-6 border-l border-neutral-200 bg-white p-6 shadow-2xl transition ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              메뉴
            </p>
            <h2 className="text-lg font-semibold text-neutral-900">더보기</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-600"
          >
            닫기
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-2">
          {extraItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
      </aside>
    </>
  );
}
