const quests = [
  {
    id: "quest-1",
    title: "SLA 임박 5건 처리",
    progress: 3,
    total: 5,
    reward: "경험치 +120",
  },
  {
    id: "quest-2",
    title: "오늘 티켓 10건 완료",
    progress: 6,
    total: 10,
    reward: "경험치 +200",
  },
  {
    id: "quest-3",
    title: "대기 사용자 4명 검토",
    progress: 2,
    total: 4,
    reward: "경험치 +80",
  },
];

export default function QuestBoard() {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
            미션
          </p>
          <h2 className="text-lg font-semibold text-neutral-900">
            오늘의 퀘스트
          </h2>
        </div>
        <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
          연속 6일
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {quests.map((quest) => {
          const progress = Math.round((quest.progress / quest.total) * 100);

          return (
            <div
              key={quest.id}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-neutral-900">
                  {quest.title}
                </span>
                <span className="text-xs text-neutral-500">{quest.reward}</span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white">
                <div
                  className="h-full rounded-full bg-neutral-900"
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
