export default function TicketDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">티켓 상세</h1>
      <p className="mt-2 text-sm text-neutral-600">티켓 ID: {params.id}</p>
    </main>
  );
}
