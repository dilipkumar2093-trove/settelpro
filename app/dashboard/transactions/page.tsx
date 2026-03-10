import { Topbar } from "@/components/dashboard/Topbar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { formatINR } from "@/lib/format";
import { mockTransactions } from "@/lib/mock";

export default function TransactionsPage() {
  return (
    <div>
      <Topbar title="Transactions" subtitle="Track payment status, fees, and settlement readiness" />

      <div className="px-5 py-5">
        <Card>
          <CardHeader
            title="All transactions (sample)"
            subtitle="Mock data for UI scaffolding"
          />
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-zinc-400">
                  <tr>
                    <th className="py-2">Time</th>
                    <th className="py-2">Transaction</th>
                    <th className="py-2">Order</th>
                    <th className="py-2">Customer</th>
                    <th className="py-2">Method</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Fee</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {mockTransactions.map((t) => (
                    <tr key={t.id} className="text-zinc-200">
                      <td className="py-2 text-zinc-400">{t.createdAt}</td>
                      <td className="py-2 font-mono text-xs text-zinc-300">{t.id}</td>
                      <td className="py-2 font-medium text-zinc-50">{t.orderId}</td>
                      <td className="py-2">{t.customer}</td>
                      <td className="py-2">{t.method}</td>
                      <td className="py-2">{formatINR(t.amount)}</td>
                      <td className="py-2 text-zinc-400">{formatINR(t.fee)}</td>
                      <td className="py-2">
                        <Badge
                          variant={
                            t.status === "Settled"
                              ? "success"
                              : t.status === "Pending"
                                ? "warning"
                                : "danger"
                          }
                        >
                          {t.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

