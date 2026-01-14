"use client";

import { ReactNode } from "react";
import { getCurrentRole, Role } from "@/lib/roles";

export default function RoleGate({
  allowed,
  children,
}: {
  allowed: Role[];
  children: ReactNode;
}) {
  const role = getCurrentRole();

  if (!allowed.includes(role)) {
    return null;
  }

  return <>{children}</>;
}
