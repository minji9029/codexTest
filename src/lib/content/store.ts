"use client";

import type { Notice, NoticeStatus } from "@/mock/content";

export type LocalNotice = Notice & { isDraft?: boolean };

const STORAGE_KEY = "admin-kit-content";

function safeParse(raw: string | null): LocalNotice[] {
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw) as LocalNotice[];
  } catch {
    return [];
  }
}

export function readLocalNotices(): LocalNotice[] {
  if (typeof window === "undefined") {
    return [];
  }
  return safeParse(window.localStorage.getItem(STORAGE_KEY));
}

function writeLocalNotices(notices: LocalNotice[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
}

export function createLocalNoticeId() {
  return `CNT-LOCAL-${Date.now()}`;
}

export function upsertLocalNotice(notice: LocalNotice) {
  const existing = readLocalNotices();
  const index = existing.findIndex((item) => item.id === notice.id);
  if (index >= 0) {
    existing[index] = notice;
  } else {
    existing.unshift(notice);
  }
  writeLocalNotices(existing);
}

export function buildNotice({
  id,
  title,
  content,
  author,
  status,
  startsAt,
  endsAt,
  createdAt,
  isDraft,
}: {
  id: string;
  title: string;
  content: string;
  author: string;
  status: NoticeStatus;
  startsAt: string;
  endsAt: string;
  createdAt: string;
  isDraft?: boolean;
}): LocalNotice {
  return {
    id,
    title,
    content,
    author,
    status,
    startsAt,
    endsAt,
    createdAt,
    isDraft,
  };
}
