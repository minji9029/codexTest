import ContentTable from "@/components/content/ContentTable";
import Link from "next/link";

export default function ContentPage() {
  return (
    <main className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">콘텐츠</h1>
          <p className="mt-2 text-sm text-neutral-600">
            공지 및 게시물을 관리합니다
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            미리보기
          </button>
          <Link
            href="/content/new"
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white"
          >
            새 공지
          </Link>
        </div>
      </div>
      <ContentTable />
    </main>
  );
}
