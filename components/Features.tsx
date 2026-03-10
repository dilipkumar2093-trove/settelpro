export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          Product
        </div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
          Built for Indian marketplaces and D2C brands
        </h2>
        <p className="mt-3 text-sm text-slate-300">
          SettelPro connects your marketplaces, gateways, and bank statements into a single
          reconciliation layer.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Reconciliation",
            body: "Match orders, settlements, and bank credits with clear explanations for every delta."
          },
          {
            title: "Dispute alerts",
            body: "Get early dispute signals, SLA reminders, and suggested evidence packs per case."
          },
          {
            title: "GST reports",
            body: "Export taxable value, GST collected, and ITC summaries aligned with Indian filings."
          },
          {
            title: "Multi-platform sync",
            body: "Keep Amazon, Flipkart, Shopify and payment gateways in lockstep with your ledger."
          }
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 px-5 py-5 shadow-[0_18px_45px_-36px_rgba(15,23,42,1)]"
          >
            <div className="text-sm font-semibold text-slate-50">{f.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-300">{f.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

