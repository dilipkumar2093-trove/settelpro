import { Badge } from "@/components/ui/Badge";
import { formatINR } from "@/lib/format";
import type { Transaction } from "@/lib/mock";

export function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  const gatewayLabel = (method: Transaction["method"]) => {
    switch (method) {
      case "UPI":
        return "UPI / PSP";
      case "Card":
        return "Card Gateway";
      case "NetBanking":
        return "NetBanking";
      case "Wallet":
        return "Wallet";
      default:
        return method;
    }
  };

  const settlementLabel = (status: Transaction["status"]) => {
    if (status === "Settled") return "Settled";
    if (status === "Pending") return "In payout";
    return "N/A";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead className="text-xs text-zinc-400">
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Gateway</th>
            <th className="py-2">Status</th>
            <th className="py-2">Settlement</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {transactions.map((t) => (
            <tr key={t.id} className="text-zinc-200">
              <td className="py-2">
                <div className="font-medium text-zinc-50">{t.orderId}</div>
                <div className="text-xs text-zinc-500">{t.createdAt}</div>
              </td>
              <td className="py-2">{formatINR(t.amount)}</td>
              <td className="py-2 text-zinc-300">{gatewayLabel(t.method)}</td>
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
              <td className="py-2 text-xs text-zinc-300">{settlementLabel(t.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

