export type NoticeStatus = "scheduled" | "live" | "ended";

export type Notice = {
  id: string;
  title: string;
  author: string;
  status: NoticeStatus;
  startsAt: string;
  endsAt: string;
  createdAt: string;
  content: string;
  isDraft?: boolean;
};

const baseNotices: Notice[] = [
  {
    id: "CNT-101",
    title: "3월 점검 일정 안내",
    author: "민지",
    status: "scheduled",
    startsAt: "2024-03-12",
    endsAt: "2024-03-12",
    createdAt: "2024-03-07",
    content: "3월 12일 02:00~04:00(KST)에 시스템 점검이 예정되어 있습니다.",
  },
  {
    id: "CNT-102",
    title: "환불 정책 변경 안내",
    author: "소라",
    status: "live",
    startsAt: "2024-03-01",
    endsAt: "2024-03-31",
    createdAt: "2024-02-25",
    content: "구매 후 7일 이내 구독 상품은 환불이 가능합니다.",
  },
  {
    id: "CNT-103",
    title: "배송 지연 안내",
    author: "지나",
    status: "live",
    startsAt: "2024-03-04",
    endsAt: "2024-03-18",
    createdAt: "2024-03-03",
    content: "물류 이슈로 배송이 1~2일 지연될 수 있습니다.",
  },
  {
    id: "CNT-104",
    title: "앱 업데이트 v2.4",
    author: "아린",
    status: "ended",
    startsAt: "2024-02-05",
    endsAt: "2024-02-20",
    createdAt: "2024-02-01",
    content: "v2.4에는 성능 개선과 새로운 UI가 포함됩니다.",
  },
  {
    id: "CNT-105",
    title: "신규 온보딩 가이드",
    author: "민지",
    status: "scheduled",
    startsAt: "2024-03-20",
    endsAt: "2024-03-30",
    createdAt: "2024-03-06",
    content: "엔터프라이즈 고객 대상 온보딩 가이드를 배포합니다.",
  },
];

function generateNotices(): Notice[] {
  const extraRounds = 3;
  const generated = Array.from({ length: extraRounds }).flatMap((_, index) => {
    const offset = (index + 1) * baseNotices.length;
    return baseNotices.map((notice, noticeIndex) => ({
      ...notice,
      id: `CNT-${String(101 + offset + noticeIndex).padStart(3, "0")}`,
      title: `${notice.title} (묶음 ${index + 1})`,
    }));
  });

  return [...baseNotices, ...generated];
}

export const notices: Notice[] = generateNotices();
