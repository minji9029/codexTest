import TicketsTable from "@/components/tickets/TicketsTable";
import TicketsActions from "@/components/tickets/TicketsActions";

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
        <TicketsActions />
      </div>
      <TicketsTable />
    </main>
  );
}
