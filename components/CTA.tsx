import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-4">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950 p-8">
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative">
          <div className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Start reconciling marketplace payouts with SettelPro.
          </div>
          <div className="mt-3 max-w-2xl text-sm text-slate-300">
            Bring your Amazon, Flipkart, Shopify, and gateway reports into one trust layer for
            payouts, disputes, and GST.
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-indigo-400"
            >
              Create merchant account
            </Link>
            <a
              href="#trust"
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
            >
              Book demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

