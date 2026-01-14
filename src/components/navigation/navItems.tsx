import { Role } from "@/lib/roles";

export type IconProps = { className?: string };

const IconDashboard = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M3 13h8V3H3z" />
    <path d="M13 21h8v-8h-8z" />
    <path d="M13 3h8v6h-8z" />
    <path d="M3 17h8v4H3z" />
  </svg>
);

const IconUsers = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 11a4 4 0 1 0-8 0" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const IconTickets = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 7h14v10H5z" />
    <path d="M9 7V5h6v2" />
    <path d="M8 12h8" />
  </svg>
);

const IconContent = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 4h12v16H6z" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
    <path d="M9 16h4" />
  </svg>
);

const IconReports = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 19h16" />
    <path d="M7 16v-6" />
    <path d="M12 16V8" />
    <path d="M17 16v-4" />
  </svg>
);

const IconSettings = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 8a4 4 0 1 0 0 8" />
    <path d="M19.4 15a7.9 7.9 0 0 0 .1-6l2-1.2-2-3.4-2.3 1a8 8 0 0 0-4.6-2.6L12 1H8l-.6 2.8a8 8 0 0 0-4.6 2.6l-2.3-1-2 3.4 2 1.2a7.9 7.9 0 0 0 .1 6l-2 1.2 2 3.4 2.3-1a8 8 0 0 0 4.6 2.6L8 23h4l.6-2.8a8 8 0 0 0 4.6-2.6l2.3 1 2-3.4z" />
  </svg>
);

const IconAudit = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 3h12v18H6z" />
    <path d="M9 7h6" />
    <path d="M9 11h6" />
    <path d="M9 15h4" />
  </svg>
);

export type NavItem = {
  href: string;
  label: string;
  roles: Role[];
  icon: (props: IconProps) => JSX.Element;
};

export const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "대시보드",
    roles: ["admin", "manager", "staff"],
    icon: IconDashboard,
  },
  { href: "/users", label: "사용자", roles: ["admin"], icon: IconUsers },
  {
    href: "/tickets",
    label: "티켓",
    roles: ["admin", "manager", "staff"],
    icon: IconTickets,
  },
  {
    href: "/content",
    label: "콘텐츠",
    roles: ["admin", "manager"],
    icon: IconContent,
  },
  {
    href: "/reports",
    label: "리포트",
    roles: ["admin", "manager"],
    icon: IconReports,
  },
  {
    href: "/settings",
    label: "설정",
    roles: ["admin"],
    icon: IconSettings,
  },
  {
    href: "/audit-logs",
    label: "감사 로그",
    roles: ["admin", "manager"],
    icon: IconAudit,
  },
];
