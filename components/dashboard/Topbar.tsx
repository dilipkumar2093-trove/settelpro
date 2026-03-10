"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/auth";
import { Button } from "@/components/ui/Button";

export function Topbar({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 bg-zinc-950/60 px-5 py-4 backdrop-blur">
      <div>
        <div className="text-lg font-semibold text-zinc-50">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-zinc-400">{subtitle}</div> : null}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          onClick={() => {
            logout();
            router.push("/login");
          }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
}

