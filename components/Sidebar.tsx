import Link from "next/link";

const nav = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/transactions", label: "Transactions" },
  { href: "/dashboard/reconciliation", label: "Reconciliation" },
  { href: "/dashboard/disputes", label: "Disputes" },
  { href: "/dashboard/gst-reports", label: "GST Reports" },
  { href: "/dashboard/settings", label: "Settings" }
];

export function Sidebar({ activePath }: { activePath: string }) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-zinc-800 bg-zinc-950/90 backdrop-blur md:block">
      <div className="px-5 py-5">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-[0_0_0_1px_rgba(255,255,255,0.18)]" />
          <div>
            <div className="text-sm font-semibold text-zinc-50">Settel</div>
            <div className="text-xs text-zinc-400">Commerce Trust Layer</div>
          </div>
        </div>
      </div>

      <nav className="px-3 pb-6">
        {nav.map((item) => {
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 flex items-center rounded-xl px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-zinc-900 text-zinc-50"
                  : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-50"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

