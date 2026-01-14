import RolesMatrix from "@/components/settings/RolesMatrix";

export default function RolesPage() {
  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          역할 및 권한
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          관리자/매니저/스태프 권한을 관리합니다
        </p>
      </div>
      <RolesMatrix />
    </main>
  );
}
