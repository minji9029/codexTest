export type Kpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
  goodTrend: "up" | "down" | "flat";
  description: string;
};

export type QueueItem = {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  sla: "safe" | "warning" | "breach";
  assignee: string;
};

export type TrendPoint = {
  label: string;
  current: number;
  previous: number;
};

export const kpis: Kpi[] = [
  {
    id: "new-users",
    label: "신규 사용자",
    value: "1,284",
    delta: "+12%",
    trend: "up",
    goodTrend: "up",
    description: "선택한 기간 동안 가입한 신규 사용자 수.",
  },
  {
    id: "open-tickets",
    label: "대기 티켓",
    value: "86",
    delta: "-6%",
    trend: "down",
    goodTrend: "down",
    description: "아직 처리되지 않은 티켓 수.",
  },
  {
    id: "resolved-today",
    label: "금일 처리",
    value: "142",
    delta: "+4%",
    trend: "up",
    goodTrend: "up",
    description: "오늘 완료 처리된 티켓 수.",
  },
  {
    id: "avg-handle",
    label: "평균 처리 시간",
    value: "18분",
    delta: "+2%",
    trend: "up",
    goodTrend: "down",
    description: "배정부터 완료까지 평균 소요 시간.",
  },
];

export const trendSeries: TrendPoint[] = [
  { label: "월", current: 32, previous: 28 },
  { label: "화", current: 48, previous: 52 },
  { label: "수", current: 40, previous: 44 },
  { label: "목", current: 64, previous: 58 },
  { label: "금", current: 58, previous: 61 },
  { label: "토", current: 44, previous: 40 },
  { label: "일", current: 52, previous: 47 },
];

export const queueItems: QueueItem[] = [
  {
    id: "TCK-2384",
    title: "주문 #5521 환불 요청",
    priority: "high",
    sla: "breach",
    assignee: "민지",
  },
  {
    id: "TCK-2388",
    title: "청구지 주소 변경",
    priority: "medium",
    sla: "warning",
    assignee: "지나",
  },
  {
    id: "TCK-2391",
    title: "계정 인증 지연 문의",
    priority: "high",
    sla: "warning",
    assignee: "아린",
  },
  {
    id: "TCK-2394",
    title: "콘텐츠 삭제 요청",
    priority: "low",
    sla: "safe",
    assignee: "소라",
  },
  {
    id: "TCK-2397",
    title: "배송 상태 업데이트 문의",
    priority: "medium",
    sla: "safe",
    assignee: "민지",
  },
];
