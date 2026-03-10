"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { login } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  const router = useRouter();
  const [merchantName, setMerchantName] = useState("Acme Stores");
  const [email, setEmail] = useState("merchant@example.com");
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(
    () => merchantName.trim().length > 1 && email.trim().length > 3,
    [merchantName, email]
  );

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-xl items-center px-6">
        <div className="w-full rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_120px_-60px_rgba(6,182,212,0.6)]">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-2xl bg-primary-500" />
            <div>
              <div className="text-base font-semibold text-zinc-50">SettlePro</div>
              <div className="text-sm text-zinc-400">Create merchant account</div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 text-sm font-medium text-zinc-200">Merchant name</div>
              <Input
                value={merchantName}
                onChange={(e) => setMerchantName(e.target.value)}
                placeholder="Your store name"
              />
            </div>
            <div>
              <div className="mb-2 text-sm font-medium text-zinc-200">Email</div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="merchant@company.com"
                autoComplete="email"
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
              Create account
            </Button>
            <div className="text-sm text-zinc-400">
              Already have an account?{" "}
              <Link className="text-primary-300 hover:text-primary-200" href="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

