import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-56 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            SettelPro • For Indian merchants
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
            The trust layer for marketplace payouts in India.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            SettelPro reconciles payments, flags disputes, and generates GST-ready reports across
            Amazon, Flipkart, Shopify and your payment gateways — in one clean dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-indigo-400"
            >
              Start free
            </Link>
            <a
              href="#trust"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Talk to sales
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-400">
            <div>
              <div className="font-semibold text-slate-200">Minutes, not weeks</div>
              <div className="mt-1">To reconcile marketplace payouts.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-200">Dispute-ready</div>
              <div className="mt-1">Evidence mapped to every order.</div>
            </div>
            <div>
              <div className="font-semibold text-slate-200">GST out of the box</div>
              <div className="mt-1">Exports aligned to Indian filings.</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_28px_80px_-60px_rgba(15,23,42,1)]">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">Payouts overview</div>
                <div className="mt-1 text-xs text-slate-400">Sample marketplace snapshot</div>
              </div>
              <div className="rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs text-slate-200">
                Live demo
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3">
                <div className="text-xs text-slate-400">GMV (30d)</div>
                <div className="mt-1 text-base font-semibold text-slate-50">₹4.8L</div>
                <div className="mt-2 text-xs text-emerald-300">+12% vs last month</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3">
                <div className="text-xs text-slate-400">Disputes</div>
                <div className="mt-1 text-base font-semibold text-slate-50">3 active</div>
                <div className="mt-2 text-xs text-amber-300">2 nearing SLA</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3">
                <div className="text-xs text-slate-400">GST summary</div>
                <div className="mt-1 text-base font-semibold text-slate-50">₹74.3K</div>
                <div className="mt-2 text-xs text-slate-400">Net payable (Q4)</div>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <div className="grid grid-cols-4 gap-px bg-white/5 text-xs text-slate-300">
                {["Order", "Platform", "Amount", "Status"].map((h) => (
                  <div key={h} className="px-3 py-2">
                    {h}
                  </div>
                ))}
              </div>
              <div className="divide-y divide-white/5 text-sm">
                {[
                  { order: "ORD-82311", channel: "Amazon", amount: "₹2,499", status: "Reconciling" },
                  { order: "ORD-82312", channel: "Flipkart", amount: "₹999", status: "Matched" },
                  { order: "ORD-82313", channel: "Shopify", amount: "₹4,999", status: "Mismatch" }
                ].map((r) => (
                  <div key={r.order} className="grid grid-cols-4 items-center px-3 py-2">
                    <div className="font-medium text-slate-50">{r.order}</div>
                    <div className="text-slate-300">{r.channel}</div>
                    <div className="text-slate-200">{r.amount}</div>
                    <div className="text-xs">
                      <span
                        className={
                          r.status === "Matched"
                            ? "rounded-full bg-emerald-500/15 px-2 py-1 text-emerald-200"
                            : r.status === "Reconciling"
                              ? "rounded-full bg-blue-500/15 px-2 py-1 text-blue-200"
                              : "rounded-full bg-amber-500/15 px-2 py-1 text-amber-200"
                        }
                      >
                        {r.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

