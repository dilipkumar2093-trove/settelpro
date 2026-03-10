"use client";

import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getAuthedUser, type AuthedUser } from "@/lib/auth";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<AuthedUser | null>(null);

  useEffect(() => {
    const u = getAuthedUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
  }, [router]);

  const activePath = useMemo(() => pathname ?? "/dashboard", [pathname]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto flex max-w-7xl">
        <Sidebar activePath={activePath} />
        <main className="min-w-0 flex-1">
          <div className="px-5 py-4 text-xs text-zinc-500">
            Signed in as <span className="text-zinc-200">{user?.email ?? "…"}</span>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}

