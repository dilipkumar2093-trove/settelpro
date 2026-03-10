const links = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-50">Settel</div>
            <div className="mt-2 text-sm text-zinc-400">
              The Trust Layer for Digital Commerce.
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-zinc-300 transition hover:text-zinc-50"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Settel. All rights reserved.</div>
          <div>Made for finance & ops teams.</div>
        </div>
      </div>
    </footer>
  );
}

