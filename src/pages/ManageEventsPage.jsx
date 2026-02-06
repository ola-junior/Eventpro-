const events = [
  {
    title: "Design Leadership Roundtable",
    date: "Aug 24, 2026",
    status: "Live",
    attendees: "312"
  },
  {
    title: "Product Strategy Workshop",
    date: "Sep 05, 2026",
    status: "Draft",
    attendees: "-"
  },
  {
    title: "Startup Fundraising Forum",
    date: "Oct 18, 2026",
    status: "Scheduled",
    attendees: "142"
  }
];

const ManageEventsPage = () => {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Manage events
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">
          Your events at a glance
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Keep your published and draft events organized from one workspace.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
          >
            <p className="text-xs uppercase text-slate-400">{event.status}</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {event.title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {event.date} • Attendees: {event.attendees}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:border-slate-300"
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white"
              >
                View
              </button>
              <button
                type="button"
                className="rounded-full border border-rose-200 px-4 py-2 font-semibold text-rose-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEventsPage;
