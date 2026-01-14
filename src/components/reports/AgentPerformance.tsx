import { agentMetrics } from "@/mock/reports";

export default function AgentPerformance() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            담당자
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            담당자별 성과
          </h2>
        </div>
        <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
          CSV 내보내기
        </button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[560px] text-left">
          <thead className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            <tr>
              <th className="px-3 py-2">담당자</th>
              <th className="px-3 py-2">처리 건수</th>
              <th className="px-3 py-2">평균 시간</th>
              <th className="px-3 py-2">완료율</th>
            </tr>
          </thead>
          <tbody>
            {agentMetrics.map((agent) => (
              <tr
                key={agent.id}
                className="border-b border-neutral-200 text-sm last:border-none"
              >
                <td className="px-3 py-3 font-semibold text-neutral-900">
                  {agent.name}
                </td>
                <td className="px-3 py-3 text-neutral-600">{agent.handled}</td>
                <td className="px-3 py-3 text-neutral-600">
                  {agent.avgHandleTime}
                </td>
                <td className="px-3 py-3 text-neutral-600">
                  {agent.completionRate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
