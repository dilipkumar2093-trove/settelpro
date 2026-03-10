export type TransactionStatus = "Settled" | "Pending" | "Failed";
export type ReconStatus = "Matched" | "Mismatch" | "Missing";
export type DisputeStatus = "Open" | "Under Review" | "Resolved";

export type Transaction = {
  id: string;
  createdAt: string;
  orderId: string;
  customer: string;
  method: "UPI" | "Card" | "NetBanking" | "Wallet";
  amount: number;
  fee: number;
  status: TransactionStatus;
};

export type ReconciliationRow = {
  id: string;
  settlementDate: string;
  payoutRef: string;
  gatewayAmount: number;
  bankAmount: number;
  status: ReconStatus;
  notes?: string;
};

export type Dispute = {
  id: string;
  createdAt: string;
  orderId: string;
  reason: string;
  amount: number;
  status: DisputeStatus;
  slaDue: string;
};

export type GstReportRow = {
  period: string;
  taxableValue: number;
  gstCollected: number;
  itcEligible: number;
  netGstPayable: number;
};

export const mockTransactions: Transaction[] = [
  {
    id: "txn_10421",
    createdAt: "2026-03-05 10:41",
    orderId: "ORD-82311",
    customer: "A. Sharma",
    method: "UPI",
    amount: 2499,
    fee: 44.98,
    status: "Settled"
  },
  {
    id: "txn_10422",
    createdAt: "2026-03-05 10:55",
    orderId: "ORD-82312",
    customer: "M. Khan",
    method: "Card",
    amount: 999,
    fee: 21.5,
    status: "Pending"
  },
  {
    id: "txn_10423",
    createdAt: "2026-03-05 11:06",
    orderId: "ORD-82313",
    customer: "R. Patel",
    method: "NetBanking",
    amount: 4999,
    fee: 69.25,
    status: "Settled"
  },
  {
    id: "txn_10424",
    createdAt: "2026-03-05 11:14",
    orderId: "ORD-82314",
    customer: "S. Iyer",
    method: "Wallet",
    amount: 349,
    fee: 9.2,
    status: "Failed"
  }
];

export const mockReconciliation: ReconciliationRow[] = [
  {
    id: "rec_9001",
    settlementDate: "2026-03-04",
    payoutRef: "PAYOUT-77119",
    gatewayAmount: 8412.0,
    bankAmount: 8412.0,
    status: "Matched"
  },
  {
    id: "rec_9002",
    settlementDate: "2026-03-04",
    payoutRef: "PAYOUT-77122",
    gatewayAmount: 2599.0,
    bankAmount: 2499.0,
    status: "Mismatch",
    notes: "Fee adjustment not applied"
  },
  {
    id: "rec_9003",
    settlementDate: "2026-03-03",
    payoutRef: "PAYOUT-77088",
    gatewayAmount: 1349.0,
    bankAmount: 0,
    status: "Missing",
    notes: "Bank statement not received"
  }
];

export const mockDisputes: Dispute[] = [
  {
    id: "dsp_301",
    createdAt: "2026-03-04 18:02",
    orderId: "ORD-82255",
    reason: "Chargeback: cardholder dispute",
    amount: 1299,
    status: "Open",
    slaDue: "2026-03-07"
  },
  {
    id: "dsp_302",
    createdAt: "2026-03-03 09:31",
    orderId: "ORD-82110",
    reason: "Item not received",
    amount: 2499,
    status: "Under Review",
    slaDue: "2026-03-06"
  },
  {
    id: "dsp_303",
    createdAt: "2026-02-28 12:10",
    orderId: "ORD-81901",
    reason: "Duplicate transaction",
    amount: 999,
    status: "Resolved",
    slaDue: "2026-03-02"
  }
];

export const mockGstReport: GstReportRow[] = [
  {
    period: "FY 2025-26 • Q4 (Jan–Mar)",
    taxableValue: 482300,
    gstCollected: 86814,
    itcEligible: 12490,
    netGstPayable: 74324
  },
  {
    period: "FY 2025-26 • Q3 (Oct–Dec)",
    taxableValue: 412750,
    gstCollected: 74295,
    itcEligible: 10120,
    netGstPayable: 64175
  }
];

