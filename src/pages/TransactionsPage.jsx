const transactions = [
  {
    id: "TX-4821",
    event: "Future of Fintech Summit",
    date: "Aug 18, 2026",
    amount: "$24,200",
    status: "Paid"
  },
  {
    id: "TX-4822",
    event: "Women in Leadership",
    date: "Aug 19, 2026",
    amount: "$12,840",
    status: "Processing"
  },
  {
    id: "TX-4823",
    event: "Creator Economy Lab",
    date: "Aug 22, 2026",
    amount: "$8,920",
    status: "Paid"
  }
];

const TransactionsPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Transactions
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Track payments and payouts
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Monitor ticket revenue and payout status from a unified ledger.
        </p>
      </header>

      <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center"
          >
            <div>
              <p className="text-xs uppercase text-slate-400">{item.id}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.event}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.date}</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-xl font-semibold text-slate-900">
                {item.amount}
              </p>
              <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsPage;
