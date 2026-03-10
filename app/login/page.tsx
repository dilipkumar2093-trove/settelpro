"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { login } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("merchant@example.com");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => email.trim().length > 3, [email]);

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-primary-500" />
              <div>
                <div className="text-base font-semibold text-zinc-50">SettlePro</div>
                <div className="text-sm text-zinc-400">
                  Reconciliation, disputes, and GST reporting
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                Monitor transaction health and settlement throughput.
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                Catch reconciliation mismatches early and reduce revenue leakage.
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3">
                Stay ahead of chargebacks with dispute alerts and SLAs.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(6,182,212,0.6)]">
            <div className="text-xl font-semibold text-zinc-50">Log in</div>
            <div className="mt-1 text-sm text-zinc-400">
              Use any email — this demo stores a session locally.
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="mb-2 text-sm font-medium text-zinc-200">Email</div>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="merchant@company.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <div className="mb-2 text-sm font-medium text-zinc-200">Password</div>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  type="password"
                  autoComplete="current-password"
                />
              </div>
              <Button
                className="w-full"
                disabled={!canSubmit || submitting}
                onClick={() => {
                  setSubmitting(true);
                  login(email.trim());
                  router.push("/dashboard");
                }}
              >
                Continue
              </Button>
              <div className="text-sm text-zinc-400">
                New here?{" "}
                <Link className="text-primary-300 hover:text-primary-200" href="/signup">
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

