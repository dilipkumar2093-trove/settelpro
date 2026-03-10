import { Topbar } from "@/components/dashboard/Topbar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { formatINR } from "@/lib/format";
import { mockReconciliation } from "@/lib/mock";

function statusVariant(status: string) {
  if (status === "Matched") return "success" as const;
  if (status === "Mismatch") return "warning" as const;
  return "danger" as const;
}

export default function ReconciliationPage() {
  return (
    <div>
      <Topbar
        title="Reconciliation status"
        subtitle="Compare gateway payouts vs bank credits and flag mismatches"
      />

      <div className="px-5 py-5">
        <Card>
          <CardHeader title="Settlement reconciliation (sample)" />
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-zinc-400">
                  <tr>
                    <th className="py-2">Settlement date</th>
                    <th className="py-2">Payout ref</th>
                    <th className="py-2">Gateway</th>
                    <th className="py-2">Bank</th>
                    <th className="py-2">Delta</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {mockReconciliation.map((r) => {
                    const delta = r.bankAmount - r.gatewayAmount;
                    return (
                      <tr key={r.id} className="text-zinc-200">
                        <td className="py-2 text-zinc-300">{r.settlementDate}</td>
                        <td className="py-2 font-mono text-xs text-zinc-300">{r.payoutRef}</td>
                        <td className="py-2">{formatINR(r.gatewayAmount)}</td>
                        <td className="py-2">{formatINR(r.bankAmount)}</td>
                        <td className="py-2">
                          <span className={delta === 0 ? "text-zinc-300" : "text-amber-200"}>
                            {formatINR(delta)}
                          </span>
                        </td>
                        <td className="py-2">
                          <Badge variant={statusVariant(r.status)}>{r.status}</Badge>
                        </td>
                        <td className="py-2 text-zinc-400">{r.notes ?? "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

