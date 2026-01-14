export default function Topbar() {
  const isLoggedIn = true;

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/70 px-4 backdrop-blur sm:px-6">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          운영
        </p>
        <h1 className="text-lg font-semibold text-neutral-900">운영 대시보드</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <span className="hidden text-sm text-neutral-500 sm:inline">
              로그인됨
            </span>
            <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600">
              로그아웃
            </button>
          </div>
        ) : (
          <a
            href="/login"
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600"
          >
            로그인
          </a>
        )}
        <button className="hidden rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600 sm:inline-flex">
          알림
        </button>
        <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-sm text-neutral-700">
          <span className="h-8 w-8 rounded-full bg-neutral-300" />
          <span className="hidden sm:inline">민지</span>
        </div>
      </div>
    </header>
  );
}
