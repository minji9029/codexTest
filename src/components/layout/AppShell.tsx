import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import MobileNav from "@/components/layout/MobileNav";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-transparent">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />
        <div className="flex flex-1 flex-col gap-4 px-4 py-4 pb-24 sm:px-6 lg:pb-6">
          <div className="hidden sm:block">
            <Breadcrumbs />
          </div>
          <div className="bg-white/90 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:rounded-2xl sm:border sm:border-neutral-200 sm:p-6">
            {children}
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
}
