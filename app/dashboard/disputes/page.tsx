import { Topbar } from "@/components/dashboard/Topbar";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { formatINR } from "@/lib/format";
import { mockDisputes } from "@/lib/mock";

function statusVariant(status: string) {
  if (status === "Resolved") return "success" as const;
  if (status === "Under Review") return "warning" as const;
  return "danger" as const;
}

export default function DisputesPage() {
  return (
    <div>
      <Topbar
        title="Dispute alerts"
        subtitle="Stay on top of chargebacks and SLA deadlines"
      />

      <div className="px-5 py-5">
        <Card>
          <CardHeader title="Active disputes (sample)" subtitle="Prioritize by SLA due date" />
          <CardContent>
            <div className="space-y-3">
              {mockDisputes.map((d) => (
                <div
                  key={d.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-[220px]">
                      <div className="text-sm font-semibold text-zinc-50">{d.orderId}</div>
                      <div className="mt-1 text-sm text-zinc-400">{d.reason}</div>
                      <div className="mt-2 text-xs text-zinc-500">
                        Opened: <span className="text-zinc-200">{d.createdAt}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-zinc-50">
                          {formatINR(d.amount)}
                        </div>
                        <div className="mt-1 text-xs text-zinc-500">
                          SLA due: <span className="text-zinc-200">{d.slaDue}</span>
                        </div>
                      </div>
                      <Badge variant={statusVariant(d.status)}>{d.status}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

