export type Role = "admin" | "manager" | "staff";

export const roleLabels: Record<Role, string> = {
  admin: "관리자",
  manager: "매니저",
  staff: "스태프",
};

export function getCurrentRole(): Role {
  return "admin";
}
