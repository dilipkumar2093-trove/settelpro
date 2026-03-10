function Icon({
  path,
  colorClass
}: {
  path: string;
  colorClass: string;
}) {
  return (
    <div
      className={`grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 ${colorClass}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d={path} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SectionTitle({
  kicker,
  title,
  subtitle
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? (
        <div className="text-xs font-semibold uppercase tracking-wider text-primary-300">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50 md:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-sm text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div className="space-y-20 pb-20">
      {/* Problem */}
      <section id="product" className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Problem"
          title="Commerce payments are broken"
          subtitle="Marketplaces, gateways, and banks don’t agree — and merchants pay the cost in time, fees, and missed disputes."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Settlement mismatches",
              body: "Payouts differ from expected settlements due to rounding, refunds, and adjustments."
            },
            {
              title: "Hidden gateway fees",
              body: "Fee components aren’t transparent across methods and processors, making margin tracking hard."
            },
            {
              title: "Manual reconciliation",
              body: "Teams spend hours matching files across marketplaces, bank statements, and ERP exports."
            },
            {
              title: "Dispute delays",
              body: "Chargebacks arrive late, evidence gets missed, and losses pile up."
            }
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-base font-semibold text-zinc-50">{c.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-zinc-300">{c.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solution & features */}
      <section id="features" className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Solution"
          title="Settel fixes reconciliation for modern commerce"
          subtitle="One console to reconcile payments, monitor disputes, and generate GST exports across all your channels."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Automated reconciliation",
              body: "Match orders → payouts → bank credits with deterministic rules and clear audit trails.",
              icon: (
                <Icon
                  colorClass="text-emerald-200"
                  path="M6 12l3 3 9-9"
                />
              )
            },
            {
              title: "AI dispute alerts",
              body: "Get early signals, SLA reminders, and evidence checklists to reduce chargeback losses.",
              icon: (
                <Icon
                  colorClass="text-amber-200"
                  path="M12 9v4m0 4h.01"
                />
              )
            },
            {
              title: "Marketplace integrations",
              body: "Connect Amazon, Flipkart, Shopify, and gateways — unify IDs and normalize reports.",
              icon: (
                <Icon
                  colorClass="text-cyan-200"
                  path="M7 7h10M7 12h10M7 17h10"
                />
              )
            },
            {
              title: "GST-ready reports",
              body: "Generate exports for filings with taxable value, GST collected, and ITC summaries.",
              icon: (
                <Icon
                  colorClass="text-primary-200"
                  path="M7 3h10v6H7zM7 13h10v8H7z"
                />
              )
            }
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-5"
            >
              {f.icon}
              <div className="mt-4 text-base font-semibold text-zinc-50">{f.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-zinc-300">{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="mx-auto max-w-7xl px-6">
        <SectionTitle
          kicker="Dashboard"
          title="A single source of truth for settlements"
          subtitle="Track GMV, transaction health, and payout reconciliation in one clean dashboard."
        />

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "GMV", value: "₹4,82,300", note: "+12% WoW" },
              { label: "Transactions", value: "14,208", note: "30d rolling" },
              { label: "Settlement status", value: "98.7%", note: "2 mismatches" }
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4"
              >
                <div className="text-xs text-zinc-400">{kpi.label}</div>
                <div className="mt-1 text-xl font-semibold text-zinc-50">{kpi.value}</div>
                <div className="mt-2 text-xs text-zinc-400">{kpi.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

