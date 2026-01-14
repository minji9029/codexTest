import { notificationSettings, slaPolicies } from "@/mock/settings";

export default function SettingsOverview() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            환경 설정
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            알림
          </h2>
        </div>
        <div className="mt-4 space-y-4">
          {notificationSettings.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 rounded-xl border border-neutral-200 p-4"
            >
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {item.label}
                </p>
                <p className="text-xs text-neutral-500">{item.description}</p>
              </div>
              <button
                type="button"
                className={`h-7 w-12 rounded-full p-1 transition ${
                  item.enabled ? "bg-neutral-900" : "bg-neutral-200"
                }`}
                aria-pressed={item.enabled}
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-white transition ${
                    item.enabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            정책
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">SLA</h2>
        </div>
        <div className="mt-4 space-y-3">
          {slaPolicies.map((policy) => (
            <div
              key={policy.id}
              className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-700"
            >
              <span>{policy.label}</span>
              <span className="font-semibold text-neutral-900">
                {policy.value}
              </span>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
          SLA 정책 수정
        </button>
      </section>
    </div>
  );
}
