export type NotificationSetting = {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
};

export type SlaPolicy = {
  id: string;
  label: string;
  value: string;
};

export const notificationSettings: NotificationSetting[] = [
  {
    id: "notify-assigned",
    label: "할당된 티켓",
    description: "티켓이 나에게 할당되면 알림.",
    enabled: true,
  },
  {
    id: "notify-breach",
    label: "SLA 초과 알림",
    description: "SLA 임박/초과 시 경고 알림.",
    enabled: true,
  },
  {
    id: "notify-digest",
    label: "일일 요약",
    description: "매일 오전 9시에 요약 메일 발송.",
    enabled: false,
  },
];

export const slaPolicies: SlaPolicy[] = [
  { id: "sla-standard", label: "표준 응답 시간", value: "24시간" },
  { id: "sla-priority", label: "우선 응답 시간", value: "8시간" },
  { id: "sla-enterprise", label: "엔터프라이즈 응답 시간", value: "4시간" },
];
