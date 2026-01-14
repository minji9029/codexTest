export default function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">사용자 상세</h1>
      <p className="mt-2 text-sm text-neutral-600">사용자 ID: {params.id}</p>
    </main>
  );
}
