const leaderboard = [
  { id: "rank-1", name: "민지", points: 820, trend: "+12%" },
  { id: "rank-2", name: "지나", points: 760, trend: "+8%" },
  { id: "rank-3", name: "아린", points: 735, trend: "+6%" },
  { id: "rank-4", name: "소라", points: 702, trend: "+5%" },
];

export default function Leaderboard() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            리그
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            팀 리더보드
          </h2>
        </div>
        <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
          규칙 보기
        </button>
      </div>
      <div className="mt-5 space-y-3">
        {leaderboard.map((player, index) => (
          <div
            key={player.id}
            className={`flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-sm ${
              index === 0 ? "bg-amber-50" : "bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-sm font-semibold text-neutral-900">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-neutral-900">{player.name}</p>
                <p className="text-xs text-neutral-500">{player.trend} 주간</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-neutral-900">
                경험치 {player.points}
              </p>
              <p className="text-xs text-neutral-500">상위 성과자</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
