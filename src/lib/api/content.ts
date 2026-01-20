import { apiFetch } from "@/lib/api/client";
import type { Notice } from "@/mock/content";

export function fetchContent() {
  return apiFetch<Notice[]>("/api/content");
}
