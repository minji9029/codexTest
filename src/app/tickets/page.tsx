import TicketsTable from "@/components/tickets/TicketsTable";

export default function TicketsPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">티켓</h1>
          <p className="mt-2 text-sm text-neutral-600">
            요청을 추적하고 할당 및 처리합니다
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            CSV 내보내기
          </button>
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
            새 티켓
          </button>
        </div>
      </div>
      <TicketsTable />
    </main>
  );
}
