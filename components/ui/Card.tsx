import type React from "react";

export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-zinc-800 bg-zinc-950 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  right
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-zinc-800 px-5 py-4">
      <div>
        <div className="text-base font-semibold text-zinc-50">{title}</div>
        {subtitle ? <div className="mt-1 text-sm text-zinc-400">{subtitle}</div> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="px-5 py-4">{children}</div>;
}

