import Link from "next/link";

const nav = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#docs", label: "Docs" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" />
          <div className="text-sm font-semibold tracking-tight text-zinc-50">Settel</div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-zinc-200 transition hover:bg-white/5 hover:text-zinc-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-primary-400"
          >
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
}

