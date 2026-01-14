export type AgentMetric = {
  id: string;
  name: string;
  handled: number;
  avgHandleTime: string;
  completionRate: string;
};

export type DailyMetric = {
  label: string;
  handled: number;
  resolved: number;
};

export const agentMetrics: AgentMetric[] = [
  {
    id: "AG-001",
    name: "민지",
    handled: 182,
    avgHandleTime: "16분",
    completionRate: "94%",
  },
  {
    id: "AG-002",
    name: "지나",
    handled: 156,
    avgHandleTime: "18분",
    completionRate: "91%",
  },
  {
    id: "AG-003",
    name: "소라",
    handled: 141,
    avgHandleTime: "21분",
    completionRate: "89%",
  },
  {
    id: "AG-004",
    name: "아린",
    handled: 168,
    avgHandleTime: "19분",
    completionRate: "92%",
  },
];

export const dailyMetrics: DailyMetric[] = [
  { label: "월", handled: 42, resolved: 38 },
  { label: "화", handled: 55, resolved: 51 },
  { label: "수", handled: 49, resolved: 44 },
  { label: "목", handled: 61, resolved: 56 },
  { label: "금", handled: 57, resolved: 52 },
  { label: "토", handled: 39, resolved: 35 },
  { label: "일", handled: 46, resolved: 41 },
];
