import RoleGate from "@/components/auth/RoleGate";
import SettingsOverview from "@/components/settings/SettingsOverview";

export default function SettingsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">설정</h1>
        <p className="mt-2 text-sm text-neutral-600">
          앱 설정과 환경을 관리합니다
        </p>
      </div>
      <SettingsOverview />
      <RoleGate allowed={["admin"]}>
        <section className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm text-neutral-700 shadow-sm">
          <h2 className="text-lg font-semibold text-neutral-900">관리자 전용</h2>
          <p className="mt-2 text-neutral-600">
            결제, API 키, 조직 정책을 관리합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
              결제 설정
            </button>
            <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
              API 키
            </button>
          </div>
        </section>
      </RoleGate>
    </main>
  );
}
