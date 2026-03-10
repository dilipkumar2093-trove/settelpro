import Link from "next/link";
import { Topbar } from "@/components/dashboard/Topbar";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { StatsCard } from "@/components/StatsCard";
import { TransactionTable } from "@/components/TransactionTable";
import { formatINR } from "@/lib/format";
import { mockReconciliation, mockTransactions } from "@/lib/mock";

export default function DashboardOverviewPage() {
  const settled = mockTransactions.filter((t) => t.status === "Settled");
  const pending = mockTransactions.filter((t) => t.status === "Pending");
  const failed = mockTransactions.filter((t) => t.status === "Failed");

  const gmv = mockTransactions.reduce((sum, t) => sum + t.amount, 0);
  const fees = mockTransactions.reduce((sum, t) => sum + t.fee, 0);

  const mismatches = mockReconciliation.filter((r) => r.status !== "Matched");

  const pendingSettlements = pending.length;

  return (
    <div>
      <Topbar
        title="Dashboard"
        subtitle="Today’s snapshot across payments, fees, and settlements"
      />

      <div className="grid gap-4 px-5 py-5 md:grid-cols-4">
        <StatsCard label="GMV" value={formatINR(gmv)} helper="Sample data • 30d rolling" />
        <StatsCard label="Total fees" value={formatINR(fees)} helper="Gateway + platform fees" />
        <StatsCard
          label="Transactions"
          value={mockTransactions.length.toString()}
          helper="Across all channels"
        />
        <StatsCard
          label="Pending settlements"
          value={pendingSettlements.toString()}
          helper="Awaiting payout"
        />
      </div>

      <div className="px-5 pb-8">
        <Card>
          <CardHeader
            title="Transactions"
            subtitle="Sample transaction data across gateways"
            right={
              <Link
                className="text-sm text-primary-300 hover:text-primary-200"
                href="/dashboard/transactions"
              >
                View all
              </Link>
            }
          />
          <CardContent>
            <TransactionTable transactions={mockTransactions} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

