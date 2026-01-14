const quests = [
  {
    id: "user-quest-1",
    title: "대기 사용자 3명 확인",
    progress: 2,
    total: 3,
    reward: "경험치 +60",
  },
  {
    id: "user-quest-2",
    title: "프리미엄 2명 업그레이드",
    progress: 1,
    total: 2,
    reward: "경험치 +90",
  },
];

export default function UserQuestCard() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            사용자
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">퀘스트</h2>
        </div>
        <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
          레벨 4
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {quests.map((quest) => {
          const progress = Math.round((quest.progress / quest.total) * 100);

          return (
            <div
              key={quest.id}
              className={`rounded-xl border border-neutral-200 bg-neutral-50 p-4 ${
                progress === 100 ? "quest-pop" : ""
              }`}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-neutral-900">
                  {quest.title}
                </span>
                <span className="text-xs text-neutral-500">{quest.reward}</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                <div
                  className={`h-full rounded-full bg-neutral-900 ${
                    progress === 100 ? "quest-glow" : ""
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-neutral-500">
                {quest.progress}/{quest.total} 완료
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
