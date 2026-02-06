const registrations = [
  {
    name: "Jordan Lee",
    event: "Design Leadership Roundtable",
    status: "Approved"
  },
  {
    name: "Priya Desai",
    event: "Startup Fundraising Forum",
    status: "Pending"
  },
  {
    name: "Marco Ruiz",
    event: "Product Strategy Workshop",
    status: "Waitlisted"
  }
];

const ManageRegistrationsPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Registrations
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Manage attendee approvals
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Review new requests and keep attendee lists organized.
        </p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <div className="grid grid-cols-3 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase text-slate-500">
          <span>Attendee</span>
          <span>Event</span>
          <span>Status</span>
        </div>
        {registrations.map((item) => (
          <div
            key={item.name}
            className="grid grid-cols-3 items-center border-t border-slate-200 px-6 py-4 text-sm"
          >
            <span className="font-semibold text-slate-900">{item.name}</span>
            <span className="text-slate-600">{item.event}</span>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold text-slate-700">
                {item.status}
              </span>
              <button
                type="button"
                className="text-xs font-semibold text-slate-900"
              >
                Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRegistrationsPage;
