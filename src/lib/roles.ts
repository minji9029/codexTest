export type Role = "admin" | "manager" | "staff";

export const roleLabels: Record<Role, string> = {
  admin: "관리자",
  manager: "매니저",
  staff: "스태프",
};

export function getCurrentRole(): Role {
  if (typeof window === "undefined") {
    return "admin";
  }
  const raw = window.localStorage.getItem("admin-kit-auth");
  if (!raw) {
    return "admin";
  }
  try {
    const parsed = JSON.parse(raw) as { role?: Role };
    return parsed.role ?? "admin";
  } catch {
    return "admin";
  }
}
