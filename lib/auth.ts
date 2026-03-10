"use client";

export type AuthedUser = {
  id: string;
  email: string;
  merchantName: string;
};

const STORAGE_KEY = "settlepro.user";

export function getAuthedUser(): AuthedUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthedUser;
  } catch {
    return null;
  }
}

export function login(email: string): AuthedUser {
  const user: AuthedUser = {
    id: "mrc_001",
    email,
    merchantName: "SettlePro Merchant"
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  window.localStorage.removeItem(STORAGE_KEY);
}

