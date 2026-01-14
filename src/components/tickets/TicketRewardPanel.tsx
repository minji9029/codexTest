const rewards = [
  { id: "ticket-reward-1", title: "SLA 가드", detail: "경험치 +50", highlight: true },
  { id: "ticket-reward-2", title: "평균 응답", detail: "14분", highlight: false },
  { id: "ticket-reward-3", title: "다음 레벨", detail: "경험치 90 남음", highlight: false },
];

export default function TicketRewardPanel() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            보상
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            성과 보상
          </h2>
        </div>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700">
          실버
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`rounded-xl border border-neutral-200 px-4 py-3 text-sm ${
              reward.highlight ? "bg-emerald-50" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-neutral-900">
                {reward.title}
              </span>
              <span className="text-xs text-neutral-500">{reward.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
