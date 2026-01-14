const rewards = [
  { id: "reward-1", title: "연속 보너스", detail: "경험치 +40", highlight: true },
  { id: "reward-2", title: "품질 점수", detail: "98%", highlight: false },
  { id: "reward-3", title: "다음 레벨", detail: "경험치 120 남음", highlight: false },
];

export default function UserRewardPanel() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            보상
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            진행도 & 혜택
          </h2>
        </div>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">
          브론즈
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className={`rounded-xl border border-neutral-200 px-4 py-3 text-sm ${
              reward.highlight ? "bg-amber-50" : "bg-white"
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
