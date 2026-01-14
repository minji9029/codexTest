"use client";

import type { Notice } from "@/mock/content";
import { useRouter } from "next/navigation";
import { useState } from "react";

const statusLabels = {
  scheduled: "예약",
  live: "게시 중",
  ended: "종료",
} as const;

export default function ContentForm({
  initialData,
  mode,
}: {
  initialData?: Notice;
  mode: "create" | "edit";
}) {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSaveAndReturn = () => {
    setToastMessage("저장되었습니다. 목록으로 이동합니다.");
    setTimeout(() => {
      router.push("/content");
    }, 900);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            {mode === "create" ? "공지 작성" : "공지 수정"}
          </h2>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
            임시 저장
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <label className="text-sm text-neutral-600">
            제목
            <input
              defaultValue={initialData?.title}
              placeholder="공지 제목을 입력하세요"
              className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
            />
          </label>
          <label className="text-sm text-neutral-600">
            내용
            <textarea
              defaultValue={initialData?.content}
              placeholder="공지 내용을 입력하세요"
              rows={7}
              className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-neutral-600">
              시작일
              <input
                type="date"
                defaultValue={initialData?.startsAt}
                className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
              />
            </label>
            <label className="text-sm text-neutral-600">
              종료일
              <input
                type="date"
                defaultValue={initialData?.endsAt}
                className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-400"
              />
            </label>
          </div>
          <label className="text-sm text-neutral-600">
            상태
            <select
              defaultValue={initialData?.status ?? "scheduled"}
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-400"
            >
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <button className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700">
            임시 저장
          </button>
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white">
            {mode === "create" ? "게시" : "수정"}
          </button>
          <button
            type="button"
            onClick={handleSaveAndReturn}
            className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
          >
            저장 후 목록
          </button>
        </div>
      </section>
      <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
          미리보기
        </p>
        <h3 className="mt-3 text-xl font-semibold text-neutral-900">
          {initialData?.title ?? "공지 제목"}
        </h3>
        <p className="mt-4 text-sm text-neutral-600">
          {initialData?.content ??
            "공지 미리보기가 여기에 표시됩니다. 내용을 작성해 보세요."}
        </p>
        <div className="mt-6 rounded-xl border border-dashed border-neutral-200 p-4 text-xs text-neutral-500">
          시작: {initialData?.startsAt ?? "YYYY-MM-DD"} · 종료:{" "}
          {initialData?.endsAt ?? "YYYY-MM-DD"}
        </div>
      </section>
      {toastMessage && (
        <div className="fixed bottom-24 right-4 z-50 rounded-full bg-neutral-900 px-4 py-2 text-sm text-white shadow-lg sm:bottom-6">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
