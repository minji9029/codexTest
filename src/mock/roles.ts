export type Permission = {
  id: string;
  label: string;
  description: string;
  roles: {
    admin: boolean;
    manager: boolean;
    staff: boolean;
  };
};

export const permissions: Permission[] = [
  {
    id: "perm-users",
    label: "사용자 관리",
    description: "사용자 생성, 정지, 담당자 할당.",
    roles: { admin: true, manager: false, staff: false },
  },
  {
    id: "perm-tickets",
    label: "티켓 관리",
    description: "티켓 상태 변경 및 담당자 배정.",
    roles: { admin: true, manager: true, staff: true },
  },
  {
    id: "perm-content",
    label: "콘텐츠 게시",
    description: "공지 작성 및 게시 일정 설정.",
    roles: { admin: true, manager: true, staff: false },
  },
  {
    id: "perm-reports",
    label: "리포트 열람",
    description: "KPI 및 성과 대시보드 접근.",
    roles: { admin: true, manager: true, staff: false },
  },
  {
    id: "perm-settings",
    label: "설정 변경",
    description: "시스템 설정 및 SLA 정책 변경.",
    roles: { admin: true, manager: false, staff: false },
  },
];
