export function Trust() {
  return (
    <section
      id="trust"
      className="mx-auto max-w-6xl px-6 py-12 border-y border-slate-800 bg-slate-950/60"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
            Trust layer
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            A single source of truth between marketplaces, gateways, and your ledger.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Indian merchants juggle CSVs from Amazon, Flipkart, Shopify, payment gateways and bank
            statements. SettelPro sits in the middle, normalizing IDs, reconciling payouts, and
            surfacing issues before they hit your P&amp;L.
          </p>

          <div className="mt-6 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <div>
              <div className="font-semibold text-slate-50">Clear explanations</div>
              <p className="mt-1 text-slate-300">
                Every mismatch has a reason code — fee change, GST adjustment, refund, or missing
                settlement.
              </p>
            </div>
            <div>
              <div className="font-semibold text-slate-50">Audit-ready by design</div>
              <p className="mt-1 text-slate-300">
                Keep a clean trail from order to payout to bank credit with exports finance teams
                actually trust.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-xs text-slate-300">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-indigo-300">
            Flow
          </div>
          <p className="mt-2 text-sm font-medium text-slate-50">
            How SettelPro normalizes your payment data
          </p>

          <div className="mt-4 space-y-3">
            {[
              "Import marketplace settlements & gateway reports.",
              "Map orders, payouts, fees, GST components and chargebacks.",
              "Flag mismatches and disputes with clear reason codes.",
              "Export reconciled views & GST-ready reports into your tools."
            ].map((step, idx) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3"
              >
                <div className="mt-0.5 h-5 w-5 rounded-full bg-indigo-500/15 text-[10px] font-semibold text-indigo-200 grid place-items-center">
                  {idx + 1}
                </div>
                <p className="text-xs text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

