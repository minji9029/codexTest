import ContentForm from "@/components/content/ContentForm";
import { notices } from "@/mock/content";

export default function ContentEditPage({
  params,
}: {
  params: { id: string };
}) {
  const notice = notices.find((item) => item.id === params.id);

  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          공지 수정
        </h1>
        <p className="mt-2 text-sm text-neutral-600">공지 ID: {params.id}</p>
      </div>
      <ContentForm mode="edit" initialData={notice} />
    </main>
  );
}
