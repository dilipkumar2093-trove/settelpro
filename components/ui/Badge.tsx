import type React from "react";

export function Badge({
  children,
  variant = "neutral"
}: {
  children: React.ReactNode;
  variant?: "neutral" | "success" | "warning" | "danger" | "info";
}) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium";
  const variants: Record<NonNullable<typeof variant>, string> = {
    neutral: "border-zinc-700 bg-zinc-900 text-zinc-200",
    success: "border-emerald-700/60 bg-emerald-950/40 text-emerald-200",
    warning: "border-amber-700/60 bg-amber-950/40 text-amber-200",
    danger: "border-rose-700/60 bg-rose-950/40 text-rose-200",
    info: "border-cyan-700/60 bg-cyan-950/40 text-cyan-200"
  };

  return (
    <span
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

