import { Topbar } from "@/components/dashboard/Topbar";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { formatINR } from "@/lib/format";
import { mockGstReport } from "@/lib/mock";

export default function GstReportsPage() {
  return (
    <div>
      <Topbar
        title="GST reports"
        subtitle="Quarterly summary for taxable value, GST collected, and ITC"
      />

      <div className="px-5 py-5">
        <Card>
          <CardHeader title="GST summary (sample)" subtitle="Replace with your GST filings export" />
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-xs text-zinc-400">
                  <tr>
                    <th className="py-2">Period</th>
                    <th className="py-2">Taxable value</th>
                    <th className="py-2">GST collected</th>
                    <th className="py-2">ITC eligible</th>
                    <th className="py-2">Net GST payable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {mockGstReport.map((r) => (
                    <tr key={r.period} className="text-zinc-200">
                      <td className="py-2 font-medium text-zinc-50">{r.period}</td>
                      <td className="py-2">{formatINR(r.taxableValue)}</td>
                      <td className="py-2">{formatINR(r.gstCollected)}</td>
                      <td className="py-2">{formatINR(r.itcEligible)}</td>
                      <td className="py-2 font-semibold text-zinc-50">
                        {formatINR(r.netGstPayable)}
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

