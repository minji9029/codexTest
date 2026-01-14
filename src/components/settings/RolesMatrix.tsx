import { permissions } from "@/mock/roles";

export default function RolesMatrix() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
          역할
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">
          권한 매트릭스
        </h2>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[620px] text-left">
          <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            <tr>
              <th className="px-3 py-2">권한</th>
              <th className="px-3 py-2">관리자</th>
              <th className="px-3 py-2">매니저</th>
              <th className="px-3 py-2">스태프</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((perm) => (
              <tr
                key={perm.id}
                className="border-b border-neutral-200 text-sm last:border-none"
              >
                <td className="px-3 py-3">
                  <p className="font-semibold text-neutral-900">{perm.label}</p>
                  <p className="text-xs text-neutral-500">{perm.description}</p>
                </td>
                <td className="px-3 py-3 text-neutral-700">
                  {perm.roles.admin ? "예" : "아니오"}
                </td>
                <td className="px-3 py-3 text-neutral-700">
                  {perm.roles.manager ? "예" : "아니오"}
                </td>
                <td className="px-3 py-3 text-neutral-700">
                  {perm.roles.staff ? "예" : "아니오"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
