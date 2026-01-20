"use client";

import ContentForm from "@/components/content/ContentForm";
import { useQuery } from "@tanstack/react-query";
import { fetchContent } from "@/lib/api/content";
import { readLocalNotices, type LocalNotice } from "@/lib/content/store";
import { useMemo, useState } from "react";

export default function ContentEditPage({
  params,
}: {
  params: { id: string };
}) {
  const { data } = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    staleTime: 5 * 60 * 1000,
  });

  const [localNotices] = useState<LocalNotice[]>(() => readLocalNotices());

  const notices = useMemo(() => {
    const merged = new Map<string, LocalNotice>();
    (data ?? []).forEach((item) => merged.set(item.id, item));
    localNotices.forEach((item) => merged.set(item.id, item));
    return Array.from(merged.values());
  }, [data, localNotices]);

  const decodedId = decodeURIComponent(params.id);
  const notice = notices.find((item) => item.id === decodedId);

  return (
    <main className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-neutral-900">
          공지 수정
        </h1>
        <p className="mt-2 text-sm text-neutral-600">공지 ID: {params.id}</p>
      </div>
      <ContentForm key={notice?.id ?? "new"} mode="edit" initialData={notice} />
    </main>
  );
}
