import ContentForm from "@/components/content/ContentForm";

export default function ContentCreatePage() {
  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          공지 작성
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          새 공지를 작성하고 예약합니다
        </p>
      </div>
      <ContentForm mode="create" />
    </main>
  );
}
