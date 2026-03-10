## SettlePro (Next.js + Tailwind)

Merchant SaaS dashboard UI scaffold with:
- Login / Signup (demo: local storage session)
- Merchant dashboard overview
- Transactions
- Reconciliation status
- Dispute alerts
- GST reports

### Run locally

1) Install dependencies:

```bash
npm install
```

2) Start dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

### Notes

- Auth is UI-only (`localStorage`) in `lib/auth.ts` to keep this scaffold backend-free.
- If your Windows blocks scripts, run in an elevated terminal:
  - `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`

