type StatsCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function StatsCard({ label, value, helper }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-4 shadow-[0_18px_45px_-30px_rgba(15,23,42,1)]">
      <div className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-zinc-50">{value}</div>
      {helper ? <div className="mt-1 text-xs text-zinc-500">{helper}</div> : null}
    </div>
  );
}

