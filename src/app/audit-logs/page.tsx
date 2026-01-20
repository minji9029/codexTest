import AuditTable from "@/components/audit/AuditTable";
import AuditActions from "@/components/audit/AuditActions";

export default function AuditLogsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">감사 로그</h1>
          <p className="mt-2 text-sm text-neutral-600">
            변경 이력과 사용자 액션을 추적합니다
          </p>
        </div>
        <AuditActions />
      </div>
      <AuditTable />
    </main>
  );
}
