"use client";

import { useState } from "react";
import type { Role } from "@/lib/roles";

type AuthState = {
  isLoggedIn: boolean;
  role: Role;
};

const AUTH_KEY = "admin-kit-auth";

export function readAuthState(): AuthState {
  if (typeof window === "undefined") {
    return { isLoggedIn: false, role: "staff" };
  }
  const raw = window.localStorage.getItem(AUTH_KEY);
  if (!raw) {
    return { isLoggedIn: false, role: "staff" };
  }
  try {
    const parsed = JSON.parse(raw) as AuthState;
    return parsed;
  } catch {
    return { isLoggedIn: false, role: "staff" };
  }
}

export function writeAuthState(state: AuthState) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(AUTH_KEY, JSON.stringify(state));
}

export function clearAuthState() {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.removeItem(AUTH_KEY);
}

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>(() => readAuthState());

  const login = (role: Role) => {
    const next = { isLoggedIn: true, role };
    writeAuthState(next);
    setAuth(next);
  };

  const logout = () => {
    clearAuthState();
    setAuth({ isLoggedIn: false, role: "staff" });
  };

  return { auth, login, logout };
}
